#!/usr/bin/env node
/**
 * Build, serve via HTTP, and screenshot.
 * Usage: node serve-and-screenshot.js [output_path] [viewport_width]
 */
import { execSync } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Build first
console.log('Building...');
execSync('npm run build', { cwd: __dirname, stdio: 'pipe' });

// Simple static server
const distDir = path.join(__dirname, 'dist');
const mimeTypes = {
  '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css',
  '.png': 'image/png', '.svg': 'image/svg+xml', '.json': 'application/json',
  '.woff2': 'font/woff2', '.woff': 'font/woff',
};

const BASE = '/kanzlei-ki-lp/';
const server = http.createServer((req, res) => {
  // Strip Vite base path prefix so assets resolve correctly
  let url = req.url;
  if (url.startsWith(BASE)) {
    url = url.slice(BASE.length - 1); // keep leading /
  }
  let filePath = path.join(distDir, url === '/' ? 'index.html' : url);
  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  try {
    const data = fs.readFileSync(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end('Not Found');
  }
});

const PORT = 8799;
server.listen(PORT, async () => {
  console.log(`Serving on http://localhost:${PORT}`);
  
  // Dynamic import puppeteer
  const puppeteer = await import('puppeteer');
  const browser = await puppeteer.default.launch({
    headless: 'new',
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--no-sandbox'],
  });

  const [,, output = 'screenshots/current.png', width = '1440'] = process.argv;
  
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: parseInt(width), height: 900, deviceScaleFactor: 1 });
    await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 1500));

    // Scroll through entire page to trigger framer-motion whileInView animations
    await page.evaluate(async () => {
      const totalHeight = document.body.scrollHeight;
      const step = 400;
      for (let y = 0; y <= totalHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise(r => setTimeout(r, 150));
      }
      // Scroll back to top for final screenshot
      window.scrollTo(0, 0);
      await new Promise(r => setTimeout(r, 500));
    });
    await new Promise(r => setTimeout(r, 1000));

    const dir = path.dirname(output);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    await page.screenshot({ path: output, fullPage: true, type: 'png' });
    
    const vp = output.replace('.png', '-viewport.png');
    await page.screenshot({ path: vp, fullPage: false, type: 'png' });
    
    await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 2 });
    await new Promise(r => setTimeout(r, 500));
    // Scroll mobile view to trigger animations
    await page.evaluate(async () => {
      const totalHeight = document.body.scrollHeight;
      const step = 400;
      for (let y = 0; y <= totalHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise(r => setTimeout(r, 150));
      }
      window.scrollTo(0, 0);
      await new Promise(r => setTimeout(r, 500));
    });
    await new Promise(r => setTimeout(r, 1000));
    const mob = output.replace('.png', '-mobile.png');
    await page.screenshot({ path: mob, fullPage: true, type: 'png' });
    
    console.log(`Screenshots: ${output}, ${vp}, ${mob}`);
  } finally {
    await browser.close();
    server.close();
  }
});
