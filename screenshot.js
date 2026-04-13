#!/usr/bin/env node
/**
 * Screenshot Loop for Claude Code Visual Iteration
 * 
 * Takes a full-page screenshot of a local HTML file or URL.
 * Claude Code uses this to SEE its own output and fix visual issues.
 * 
 * Usage:
 *   node screenshot-loop.js [file_or_url] [output_path] [viewport_width]
 * 
 * Examples:
 *   node screenshot-loop.js index.html screenshot.png
 *   node screenshot-loop.js index.html screenshot.png 1440
 *   node screenshot-loop.js http://localhost:3000 screenshot.png
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function takeScreenshot(target, outputPath, viewportWidth = 1440) {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: parseInt(viewportWidth), height: 900, deviceScaleFactor: 1 });

    // Determine if target is URL or file
    let url;
    if (target.startsWith('http://') || target.startsWith('https://')) {
      url = target;
    } else {
      const absPath = path.resolve(target);
      if (!fs.existsSync(absPath)) {
        console.error(`File not found: ${absPath}`);
        process.exit(1);
      }
      url = `file://${absPath}`;
    }

    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    
    // Wait for fonts and images to load
    await new Promise(r => setTimeout(r, 1500));

    // Scroll through entire page to trigger IntersectionObserver animations
    await page.evaluate(async () => {
      const totalHeight = document.body.scrollHeight;
      const step = 400;
      for (let y = 0; y < totalHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise(r => setTimeout(r, 100));
      }
      window.scrollTo(0, 0);
      await new Promise(r => setTimeout(r, 500));
    });

    // Take full-page screenshot
    await page.screenshot({
      path: outputPath,
      fullPage: true,
      type: 'png'
    });

    // Also take a viewport-only screenshot (above the fold)
    const viewportOutput = outputPath.replace('.png', '-viewport.png');
    await page.screenshot({
      path: viewportOutput,
      fullPage: false,
      type: 'png'
    });

    // Take mobile screenshot
    await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 2 });
    await new Promise(r => setTimeout(r, 1000));
    const mobileOutput = outputPath.replace('.png', '-mobile.png');
    await page.screenshot({
      path: mobileOutput,
      fullPage: true,
      type: 'png'
    });

    console.log(`Screenshots saved:`);
    console.log(`  Full page: ${outputPath}`);
    console.log(`  Viewport:  ${viewportOutput}`);
    console.log(`  Mobile:    ${mobileOutput}`);

  } finally {
    await browser.close();
  }
}

const [,, target = 'index.html', output = 'screenshot.png', width = '1440'] = process.argv;
takeScreenshot(target, output, width).catch(err => {
  console.error('Screenshot failed:', err.message);
  process.exit(1);
});
