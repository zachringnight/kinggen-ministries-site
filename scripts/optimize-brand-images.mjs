#!/usr/bin/env node

import sharp from 'sharp';
import { mkdir, stat } from 'fs/promises';
import { dirname } from 'path';

const brandImages = [
  {
    source: './assets/brand-source/original-png/brand/bg/dark-green-texture.png',
    output: './public/brand/bg/dark-green-texture.webp',
    quality: 82,
  },
  {
    source: './assets/brand-source/original-png/brand/bg/off-white-texture.png',
    output: './public/brand/bg/off-white-texture.webp',
    quality: 82,
  },
  {
    source: './assets/brand-source/original-png/brand/headers/inner-header.png',
    output: './public/brand/headers/inner-header.webp',
    quality: 84,
  },
  {
    source: './assets/brand-source/original-png/brand/headers/homepage-hero.png',
    output: './public/brand/headers/homepage-hero.webp',
    quality: 84,
  },
  {
    source: './assets/brand-source/original-png/brand/headers/about-header.png',
    output: './public/brand/headers/about-header.webp',
    quality: 84,
  },
  {
    source: './assets/brand-source/original-png/brand/logo/icon-dark-green.png',
    output: './public/brand/logo/icon-dark-green.webp',
    quality: 88,
  },
  {
    source: './assets/brand-source/original-png/brand/logo/icon-light-gray.png',
    output: './public/brand/logo/icon-light-gray.webp',
    quality: 88,
  },
  {
    source: './assets/brand-source/original-png/brand/logo/icon-white.png',
    output: './public/brand/logo/icon-white.webp',
    quality: 88,
  },
];

async function optimizeOne({ source, output, quality }) {
  await mkdir(dirname(output), { recursive: true });
  await sharp(source).webp({ quality }).toFile(output);
}

async function main() {
  let totalBefore = 0;
  let totalAfter = 0;

  for (const image of brandImages) {
    try {
      const before = await stat(image.source);
      await optimizeOne(image);
      const after = await stat(image.output);

      totalBefore += before.size;
      totalAfter += after.size;

      console.log(
        `${image.source} -> ${image.output} | ${(before.size / 1024 / 1024).toFixed(2)}MB -> ${(after.size / 1024 / 1024).toFixed(2)}MB`
      );
    } catch (error) {
      console.error(`Failed: ${image.source} (${error.message})`);
      process.exitCode = 1;
    }
  }

  if (totalBefore > 0 && totalAfter > 0) {
    const reduction = ((1 - totalAfter / totalBefore) * 100).toFixed(1);
    console.log(`Total: ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB (${reduction}% smaller)`);
  }
}

main();
