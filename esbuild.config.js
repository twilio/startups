// esbuild.config.js
const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./src/index.js'], // Entry point for bundling
  bundle: true,                    // Bundle all dependencies into one file
  outfile: './assets/js/bundle.js', // Output file path
  minify: true,                    // Minify the output for production
  sourcemap: true,                 // Optionally, generate a source map
}).catch(() => process.exit(1));   // Exit on errors
