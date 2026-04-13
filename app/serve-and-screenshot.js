import http from 'http';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

const PORT = 4199;
const DIST_DIR = path.resolve('dist');

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.woff2': 'font/woff2',
};

const server = http.createServer((req, res) => {
  let filePath = path.join(DIST_DIR, req.url === '/' ? 'index.html' : req.url);
  const ext = path.extname(filePath);
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  } else {
    // SPA fallback
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(DIST_DIR, 'index.html')).pipe(res);
  }
});

server.listen(PORT, async () => {
  console.log(`Serving on http://localhost:${PORT}`);

  const { default: puppeteer } = await import('puppeteer');

  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
    await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 2000));

    const outputDir = 'screenshots';
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

    await page.screenshot({ path: 'screenshots/current.png', fullPage: true, type: 'png' });
    await page.screenshot({ path: 'screenshots/current-viewport.png', fullPage: false, type: 'png' });

    await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 2 });
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: 'screenshots/current-mobile.png', fullPage: true, type: 'png' });

    console.log('Screenshots saved!');
  } finally {
    await browser.close();
    server.close();
    process.exit(0);
  }
});
