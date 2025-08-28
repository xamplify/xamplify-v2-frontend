// postbuild.js
// Copies index.html to 404.html after Angular build for GitHub Pages SPA fallback

const fs = require('fs');
const path = require('path');

// Find the dist output directory (default for Angular)
const distDir = path.join(__dirname, 'dist', 'xamplify-v2-frontend');
const indexFile = path.join(distDir, 'index.html');
const notFoundFile = path.join(distDir, '404.html');

if (fs.existsSync(indexFile)) {
  fs.copyFileSync(indexFile, notFoundFile);
  console.log('✅ 404.html created for SPA fallback.');
} else {
  console.error('❌ index.html not found. Build may have failed or dist path is incorrect.');
  process.exit(1);
}
