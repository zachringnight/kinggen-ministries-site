#!/usr/bin/env node
/**
 * Image optimization script for KingGen Ministries site
 * Compresses large images and converts to WebP format
 */

import sharp from "sharp";
import { stat, mkdir } from "fs/promises";
import { join, parse } from "path";

const SOURCE_DIRS = ["./assets/brand-source/original-png/root", "./public"];
const OPTIMIZED_DIR = "./public/optimized";

// Images to optimize with their target settings
const imagesToOptimize = [
  { name: "Untitled-1.png", maxWidth: 1200, quality: 75 },
  { name: "KingGen Background (1).png", maxWidth: 1920, quality: 80 },
  { name: "bg_green_texture_1920x1080.png", maxWidth: 1920, quality: 75 },
  { name: "bg-green-alternate.png", maxWidth: 1920, quality: 75 },
  { name: "bg-light-stones.png", maxWidth: 1920, quality: 78 },
  { name: "logo_stack_cropped.png", maxWidth: 600, quality: 80 },
  { name: "Untitled design.png", maxWidth: 600, quality: 80 },
  { name: "Untitled-2.png", maxWidth: 800, quality: 80 },
  { name: "Untitled-3.png", maxWidth: 800, quality: 80 },
  { name: "Untitled-4.png", maxWidth: 800, quality: 80 },
  { name: "Untitled-5.png", maxWidth: 800, quality: 80 },
  { name: "Untitled-6.png", maxWidth: 800, quality: 80 },
  { name: "Untitled-7.png", maxWidth: 800, quality: 80 },
];

async function optimizeImage(inputPath, outputBasePath, maxWidth, quality) {
  const { name } = parse(inputPath);

  try {
    const inputStats = await stat(inputPath);
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Resize if wider than maxWidth
    let resizeOptions = {};
    if (metadata.width > maxWidth) {
      resizeOptions = { width: maxWidth, withoutEnlargement: true };
    }

    // Create WebP version
    const webpPath = join(outputBasePath, `${name}.webp`);
    await sharp(inputPath).resize(resizeOptions).webp({ quality }).toFile(webpPath);

    const webpStats = await stat(webpPath);

    // Also create optimized PNG for fallback
    const pngPath = join(outputBasePath, `${name}.png`);
    await sharp(inputPath)
      .resize(resizeOptions)
      .png({ quality: quality + 10, compressionLevel: 9 })
      .toFile(pngPath);

    const pngStats = await stat(pngPath);

    console.log(`✓ ${name}`);
    console.log(`  Original: ${(inputStats.size / 1024 / 1024).toFixed(2)}MB`);
    console.log(
      `  WebP: ${(webpStats.size / 1024).toFixed(0)}KB (${((1 - webpStats.size / inputStats.size) * 100).toFixed(0)}% smaller)`,
    );
    console.log(
      `  PNG: ${(pngStats.size / 1024).toFixed(0)}KB (${((1 - pngStats.size / inputStats.size) * 100).toFixed(0)}% smaller)`,
    );

    return { success: true, name, originalSize: inputStats.size, webpSize: webpStats.size, pngSize: pngStats.size };
  } catch (error) {
    console.error(`✗ Failed to optimize ${name}:`, error.message);
    return { success: false, name, error: error.message };
  }
}

async function resolveSourcePath(imageName) {
  for (const sourceDir of SOURCE_DIRS) {
    const candidatePath = join(sourceDir, imageName);
    try {
      await stat(candidatePath);
      return candidatePath;
    } catch {
      // Try next source directory
    }
  }

  throw new Error(`Source image not found: ${imageName}`);
}

async function main() {
  console.log("🖼️  KingGen Image Optimization\n");

  // Create optimized directory
  try {
    await mkdir(OPTIMIZED_DIR, { recursive: true });
  } catch (e) {}

  let totalOriginal = 0;
  let totalWebp = 0;
  let totalPng = 0;

  for (const img of imagesToOptimize) {
    let inputPath;

    try {
      inputPath = await resolveSourcePath(img.name);
    } catch (error) {
      console.error(`✗ Skipping ${img.name}: ${error.message}`);
      continue;
    }

    const result = await optimizeImage(inputPath, OPTIMIZED_DIR, img.maxWidth, img.quality);

    if (result.success) {
      totalOriginal += result.originalSize;
      totalWebp += result.webpSize;
      totalPng += result.pngSize;
    }
  }

  console.log("\n📊 Summary:");
  console.log(`  Original total: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB`);
  if (totalOriginal > 0) {
    console.log(
      `  WebP total: ${(totalWebp / 1024 / 1024).toFixed(2)}MB (${((1 - totalWebp / totalOriginal) * 100).toFixed(0)}% smaller)`,
    );
    console.log(
      `  PNG total: ${(totalPng / 1024 / 1024).toFixed(2)}MB (${((1 - totalPng / totalOriginal) * 100).toFixed(0)}% smaller)`,
    );
  } else {
    console.log("  No images were optimized.");
  }
}

main().catch(console.error);
