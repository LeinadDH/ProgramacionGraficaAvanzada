#version 330 core
in vec2 texCoord;
in vec3 T;
in vec3 B;
in vec3 N;

out vec4 FragColor;

uniform sampler2D texDiffuse;
uniform sampler2D texNormal;
uniform sampler2D texHeight;
uniform float parallaxScale;

void main()
{
    // Parallax mapping
    float height = texture(texHeight, texCoord).r;
    vec2 p = parallaxScale * height * normalize(vec2(dot(N, T), dot(N, B)));
    vec2 newTexCoord = texCoord + p;

    // Sample textures
    vec3 diffuse = texture(texDiffuse, newTexCoord).rgb;
    vec3 normal = texture(texNormal, newTexCoord).rgb;
    normal = normalize(normal * 2.0 - 1.0);

    // Calculate lighting
    vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
    float diffuseFactor = max(dot(normal, lightDir), 1.0);
    vec3 color = diffuse * diffuseFactor;

    FragColor = vec4(color, 1.0);
}