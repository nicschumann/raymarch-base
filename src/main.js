// this ensures that bundle.css gets built.
import './style/main.css';
import vert from './shaders/pass-through.vert';
import frag from './shaders/coordinates.frag';

console.log(frag);


let container = document.getElementById('canvas-container');
let regl = require('regl')({ container, extensions: []});

regl.clear({depth: [0.0, 0.0, 1.0, 1.0]}); // blue