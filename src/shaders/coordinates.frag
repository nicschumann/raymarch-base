precision mediump float;
#pragma glslify: color = require('./color.glsl')

varying vec2 v_uv;

void main ()
{
    gl_FragColor = color;
}