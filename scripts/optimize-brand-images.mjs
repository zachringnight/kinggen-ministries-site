#!/usr/bin/env node

import sharp from "sharp";
import { mkdir, stat } from "fs/promises";
import { dirname } from "path";

const curatedAssetRoot = "./assets/brand-source/kinggen-logo and background files";

const brandImages = [
  {
    source: `${curatedAssetRoot}/social/USE-FOR_cta-testimonial-section-bg_dark-green-texture_subtle-cross_3240x4050.png`,
    output: "./public/brand/social/cta-testimonial-section-bg.webp",
    quality: 82,
  },
  {
    source: `${curatedAssetRoot}/social/USE-FOR_content-section-bg_off-white-texture_subtle-cross_3240x4050.png`,
    output: "./public/brand/social/content-section-bg.webp",
    quality: 82,
  },
  {
    source: `${curatedAssetRoot}/headers/USE-FOR_inner-page-header_full-logo-text_light-gray_green-text_alt-layout_2460x1080.png`,
    output: "./public/brand/headers/inner-header.webp",
    quality: 84,
  },
  {
    source: `${curatedAssetRoot}/headers/USE-FOR_homepage-hero_full-logo-text_dark-green_white-text_2460x1080.png`,
    output: "./public/brand/headers/homepage-hero.webp",
    quality: 84,
  },
  {
    source: `${curatedAssetRoot}/headers/USE-FOR_about-page-header_full-logo-text_light-gray_green-text_2460x1080.png`,
    output: "./public/brand/headers/about-header.webp",
    quality: 84,
  },
  {
    source: `${curatedAssetRoot}/logo/USE-FOR_navbar-favicon-footer_icon-only_dark-green-bg_960x960.png`,
    output: "./public/brand/logo/icon-dark-green.webp",
    quality: 88,
  },
  {
    source: `${curatedAssetRoot}/logo/USE-FOR_navbar-favicon-footer_icon-only_light-gray-bg_960x960.png`,
    output: "./public/brand/logo/icon-light-gray.webp",
    quality: 88,
  },
  {
    source: `${curatedAssetRoot}/logo/USE-FOR_navbar-favicon-footer_icon-only_white-bg_960x960.png`,
    output: "./public/brand/logo/icon-white.webp",
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
        `${image.source} -> ${image.output} | ${(before.size / 1024 / 1024).toFixed(2)}MB -> ${(after.size / 1024 / 1024).toFixed(2)}MB`,
      );
    } catch (error) {
      console.error(`Failed: ${image.source} (${error.message})`);
      process.exitCode = 1;
    }
  }

  if (totalBefore > 0 && totalAfter > 0) {
    const reduction = ((1 - totalAfter / totalBefore) * 100).toFixed(1);
    console.log(
      `Total: ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB (${reduction}% smaller)`,
    );
  }
}

main();
