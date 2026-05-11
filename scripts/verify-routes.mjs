#!/usr/bin/env node

import { spawn } from "node:child_process";
import net from "node:net";
import process from "node:process";

const ROUTES = ["/", "/about", "/services", "/contact", "/for-referrers", "/forms"];
const KNOWN_404_PATTERNS = ["this page could not be found", "<title>404"];

const START_TIMEOUT_MS = 45_000;
const ROUTE_TIMEOUT_MS = 15_000;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function tailLines(input, maxLines = 20) {
  const lines = String(input || "")
    .split(/\r?\n/)
    .filter(Boolean);
  return lines.slice(-maxLines).join("\n");
}

function pickFreePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.unref();
    server.on("error", reject);
    server.listen(0, () => {
      const address = server.address();
      if (!address || typeof address === "string") {
        reject(new Error("Unable to resolve a free local port."));
        return;
      }
      const { port } = address;
      server.close((closeError) => {
        if (closeError) {
          reject(closeError);
          return;
        }
        resolve(port);
      });
    });
  });
}

function withTimeout(url, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  return { signal: controller.signal, clear: () => clearTimeout(timer), url };
}

async function waitForServer(baseUrl, timeoutMs, getLogs = () => "") {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const request = withTimeout(baseUrl, 1_500);
    try {
      const response = await fetch(request.url, { signal: request.signal });
      if (response.ok || response.status >= 300) {
        request.clear();
        return;
      }
    } catch {
      // Retry until timeout.
    } finally {
      request.clear();
    }
    await sleep(500);
  }
  const recentLogs = tailLines(getLogs());
  throw new Error(
    `Timed out waiting for app server at ${baseUrl}${recentLogs ? `\nRecent server logs:\n${recentLogs}` : ""}`,
  );
}

async function verifyRoute(baseUrl, route) {
  const url = `${baseUrl}${route}`;
  const request = withTimeout(url, ROUTE_TIMEOUT_MS);
  let response;
  try {
    response = await fetch(url, { signal: request.signal });
  } finally {
    request.clear();
  }

  if (response.status !== 200) {
    throw new Error(`${route} returned ${response.status} (expected 200).`);
  }

  const body = (await response.text()).toLowerCase();
  for (const pattern of KNOWN_404_PATTERNS) {
    if (body.includes(pattern)) {
      throw new Error(`${route} appears to render not-found content (matched "${pattern}").`);
    }
  }
}

async function verifyAll(baseUrl) {
  for (const route of ROUTES) {
    await verifyRoute(baseUrl, route);
    console.log(`✓ ${route}`);
  }
}

async function main() {
  const externalBaseUrl = process.env.VERIFY_BASE_URL?.trim();
  const isExternal = Boolean(externalBaseUrl);
  const baseUrl = isExternal ? externalBaseUrl.replace(/\/+$/, "") : `http://127.0.0.1:${await pickFreePort()}`;

  let child = null;
  let childLogs = "";
  let childExited = false;

  if (!isExternal) {
    const npmCmd = process.platform === "win32" ? "npm.cmd" : "npm";
    const port = baseUrl.split(":").at(-1);
    child = spawn(npmCmd, ["run", "start", "--", "--port", String(port)], {
      env: process.env,
      stdio: ["ignore", "pipe", "pipe"],
    });

    child.stdout.on("data", (chunk) => {
      childLogs += chunk.toString();
    });
    child.stderr.on("data", (chunk) => {
      childLogs += chunk.toString();
    });
    child.on("exit", () => {
      childExited = true;
    });

    await waitForServer(baseUrl, START_TIMEOUT_MS, () => childLogs);
  }

  try {
    console.log(`Verifying routes against ${baseUrl}`);
    await verifyAll(baseUrl);
    console.log("Route smoke verification passed.");
  } finally {
    if (child && !childExited) {
      child.kill("SIGTERM");
      await Promise.race([new Promise((resolve) => child.once("exit", resolve)), sleep(3_000)]);
      if (!childExited) {
        child.kill("SIGKILL");
        await Promise.race([new Promise((resolve) => child.once("exit", resolve)), sleep(3_000)]);
      }
    }
  }
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(`Route smoke verification failed: ${error.message}`);
    process.exit(1);
  });
