const fs = require('fs');
const path = require('path');
const util = require('util');
const esbuild = require('esbuild');


const buildjs = async path => {
  console.log('changed', path);
  let s = Date.now();
  esbuild.build({
    entryPoints: ['src/main.js'],
    bundle: true,

    minify: false,
    sourcemap: true,

    // Load shaders as text for WebGL.
    loader: {
      '.vs': 'text',
      '.fs': 'text',
      '.eot': 'file',
      '.woff': 'file',
      '.ttf': 'file'
    },

    platform: 'node',
    target: ['node10.4'],
    outfile: 'pub/bundle.js'

  })
  .then(() => {
    let e = Date.now();
    console.log(`No Errors. Build completed (${(e - s) / 1000}s).\n`);
  })
  .catch(() => {
    let e = Date.now();
    console.log(`Errors. Build failed (${(e - s) / 1000}s).\n`);
  });
};


module.exports = {
  buildjs
}
