precision mediump float;

varying vec2 v_uv;

uniform vec2 u_resolution;

float scene( vec3 pos )
{
    vec3 center = vec3(0.0, 0.0, 0.0);
    float radius = 0.5;

    float sphere_dist = length(pos - center) - radius;

    float floor_dist = pos.y - (-0.5);

    return min(floor_dist, sphere_dist);
}

vec3 calc_normal(vec3 pos)
{
    vec2 e = vec2(0.0001, 0.0);

    return normalize(vec3(
        scene( pos + e.xyy ) - scene( pos - e.xyy),
        scene( pos + e.yxy ) - scene( pos - e.yxy),
        scene( pos + e.yyx ) - scene( pos - e.yyx)
    ));
}

void main ()
{
    vec2 p = (2.0 * gl_FragCoord.xy - u_resolution) / u_resolution.y;

    vec3 ro = vec3(0.0, 0.0, 4.0);
    vec3 ta = vec3(0.0, 0.0, 0.0);
    
    vec3 rd = normalize(ta - ro + vec3(p, 1.5));

    vec3 col = vec3(0.15);

    // raymarch loop
    float t = 0.0;
    for (int i = 0; i < 100; i ++) {

        vec3 pos = ro + t * rd;

        float h = scene(pos);

        if ( h < .001) {
            break;
        }

        t += h;

        if ( t > 20.) {
            break;
        }
    }

    if ( t < 20. ) {
        // col = vec3(1.0);
        vec3 pos = ro + t * rd;
        vec3 nor = calc_normal(pos);

        vec3 sun_dir = normalize(vec3(2.0, 4.0, 4.0));
        float sun_diff = clamp(dot(nor, sun_dir), 0., 1.);
        vec3 sun_col = vec3(0.7, 0.5, 0.5);

        col = sun_col * sun_diff;
    } 

    col = pow(col, vec3(0.4545));

    gl_FragColor = vec4(col, 1.);
}