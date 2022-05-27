import { build } from 'esbuild';
import { glslify } from 'esbuild-plugin-glslify';

const buildjs = async path => {
  console.log('changed', path);
  let s = Date.now();
  
  build({
    entryPoints: ['src/main.js'],
    bundle: true,
    plugins:[
      glslify({
        compress: true
      })
    ],

    minify: false,
    sourcemap: true,

    // Load shaders as text for WebGL.
    loader: {
      '.vs': 'text',
      '.fs': 'text',
      '.vert': 'text',
      '.frag': 'text',
      '.glsl': 'text',

      // Load fonts as file hashes.
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


export { buildjs };