// vercel-build.js
const { execSync } = require('child_process');

try {
  execSync('node_modules/next/dist/bin/next build', { stdio: 'inherit' });
} catch (err) {
  console.error('🔥 Custom build failed:', err);
  process.exit(1);
}
