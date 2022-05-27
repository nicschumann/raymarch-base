// this ensures that bundle.css gets built.
import './style/main.css';

// shader imports
import vert from './shaders/pass-through.vert';
import frag from './shaders/scene.frag';

console.log(frag);

let container = document.getElementById('canvas-container');
let regl = require('regl')({ container, extensions: []});


const scene = regl({
    vert,
    frag,
    attributes: {
        a_position: [[-1, -1], [1, -1], [-1, 1], [1, 1]],
        a_uv: [[0, 0], [1, 0], [0, 1], [1, 1]]
    },
    uniforms: {
        u_resolution: regl.prop('u_resolution')
    },
    primitive: "triangle strip",
    count: 4
});


// game loop
regl.frame(e => {

    let u_resolution = [2 * window.innerWidth, 2 * window.innerHeight];

    scene({
       u_resolution 
    });

    // regl.clear({color: [0.0, 0.0, 1.0, 1.0]}); // blue
});