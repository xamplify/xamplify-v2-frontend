// postbuild.js
// Copies index.html to 404.html after Angular build for GitHub Pages SPA fallback

const fs = require('fs');
const path = require('path');

// Recursively find index.html in dist/xamplify-v2-frontend
function findIndexHtml(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      const found = findIndexHtml(fullPath);
      if (found) return found;
    } else if (file === 'index.html') {
      return fullPath;
    }
  }
  return null;
}

const distRoot = path.join(__dirname, 'dist', 'xamplify-v2-frontend');
const indexFile = findIndexHtml(distRoot);
if (indexFile) {
  const notFoundFile = path.join(path.dirname(indexFile), '404.html');
  fs.copyFileSync(indexFile, notFoundFile);
  console.log(`✅ 404.html created for SPA fallback at ${notFoundFile}`);
} else {
  console.error('❌ index.html not found anywhere in dist/xamplify-v2-frontend. Build may have failed or dist path is incorrect.');
  process.exit(1);
}
