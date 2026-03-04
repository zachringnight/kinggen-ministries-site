#!/usr/bin/env node

import { rm } from "node:fs/promises";
import { resolve } from "node:path";
import process from "node:process";

const targets = [".next", "tsconfig.tsbuildinfo"];

async function removeTarget(target) {
  const absolutePath = resolve(process.cwd(), target);
  await rm(absolutePath, { recursive: true, force: true });
  console.log(`Removed ${target}`);
}

async function main() {
  await Promise.all(targets.map((target) => removeTarget(target)));
}

main().catch((error) => {
  console.error(`Failed to clean build artifacts: ${error.message}`);
  process.exit(1);
});
