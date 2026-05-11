#!/usr/bin/env node

import { execSync } from "node:child_process";
import process from "node:process";

const DEFAULT_CANONICAL_CONTEXT = "Vercel – kinggen-ministries-site";
const DEFAULT_STALE_CONTEXT = "Vercel – kinggen-ministries-site-mwqc";

function run(command) {
  return execSync(command, { encoding: "utf8" }).trim();
}

function parseRepository() {
  if (process.env.GITHUB_REPOSITORY) return process.env.GITHUB_REPOSITORY;

  const remote = run("git remote get-url origin");
  // Supports:
  // - https://github.com/org/repo.git
  // - git@github.com:org/repo.git
  const match = remote.match(/github\.com[:/](.+?)\/(.+?)(?:\.git)?$/);
  if (!match) {
    throw new Error(`Unable to derive GitHub repository from origin remote: ${remote}`);
  }
  return `${match[1]}/${match[2]}`;
}

function getSha() {
  return process.env.GITHUB_SHA || run("git rev-parse HEAD");
}

async function fetchCommitStatus({ repository, sha, token }) {
  const response = await fetch(`https://api.github.com/repos/${repository}/commits/${sha}/status`, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "kinggen-verify-deploy-context",
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`GitHub API request failed (${response.status}): ${body}`);
  }

  return response.json();
}

function summarizeStatus(statuses, context) {
  const entries = statuses.filter((status) => status.context === context);
  const successful = entries.some((entry) => entry.state === "success");
  return { context, entries, successful };
}

async function main() {
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  if (!token) {
    console.warn("Skipping deploy-context verification because GITHUB_TOKEN/GH_TOKEN is not set.");
    process.exit(0);
  }

  const repository = parseRepository();
  const sha = getSha();

  const canonicalContext = process.env.CANONICAL_VERCEL_CONTEXT || DEFAULT_CANONICAL_CONTEXT;
  const staleContext = process.env.STALE_VERCEL_CONTEXT || DEFAULT_STALE_CONTEXT;

  const statusPayload = await fetchCommitStatus({ repository, sha, token });
  const statuses = Array.isArray(statusPayload.statuses) ? statusPayload.statuses : [];

  if (statuses.length === 0) {
    throw new Error(`No commit statuses were found for ${repository}@${sha}.`);
  }

  console.log(`Found ${statuses.length} commit status entries for ${repository}@${sha}.`);

  const canonical = summarizeStatus(statuses, canonicalContext);
  const stale = summarizeStatus(statuses, staleContext);

  if (!canonical.entries.length) {
    throw new Error(`Missing canonical Vercel status context "${canonicalContext}".`);
  }

  if (!canonical.successful) {
    const states = canonical.entries.map((entry) => entry.state).join(", ");
    throw new Error(`Canonical Vercel context "${canonicalContext}" is not successful. States: ${states}`);
  }

  if (stale.entries.length && !stale.successful) {
    const states = stale.entries.map((entry) => entry.state).join(", ");
    console.warn(`Stale Vercel context "${staleContext}" exists but is not successful (states: ${states}).`);
  }

  if (stale.successful) {
    console.warn(
      `Stale Vercel context "${staleContext}" is also successful. Keep this only as a temporary dual-context state and document canonical ownership.`,
    );
  }

  console.log(`✓ Canonical context "${canonicalContext}" is present and successful.`);
}

main().catch((error) => {
  console.error(`Deploy-context verification failed: ${error.message}`);
  process.exit(1);
});
