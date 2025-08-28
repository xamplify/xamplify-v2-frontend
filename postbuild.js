// postbuild.js
// Copies index.html to 404.html after Angular build for GitHub Pages SPA fallback

const fs = require('fs');
const path = require('path');

// Prefer index.html at dist/xamplify-v2-frontend or dist/xamplify-v2-frontend/browser
const distRoot = path.join(__dirname, 'dist', 'xamplify-v2-frontend');
let indexFile = path.join(distRoot, 'index.html');
if (!fs.existsSync(indexFile)) {
  // Try browser subfolder (Angular SSR or some configs)
  indexFile = path.join(distRoot, 'browser', 'index.html');
}
if (fs.existsSync(indexFile)) {
  const notFoundFile = path.join(path.dirname(indexFile), '404.html');
  fs.copyFileSync(indexFile, notFoundFile);
  console.log(`✅ 404.html created for SPA fallback at ${notFoundFile}`);
} else {
  console.error('❌ index.html not found at expected locations. Build may have failed or dist path is incorrect.');
  process.exit(1);
}
