#version 330 core
layout (location = 0) in vec3 aPos;
layout (location = 1) in vec3 aColor;
layout (location = 2) in vec2 aTex;
layout (location = 3) in vec3 aNormal;
layout (location = 4) in vec3 aTangent;
layout (location = 5) in vec3 aBitangent;

out vec3 color;
out vec2 texCoord;
out vec3 T;
out vec3 B;
out vec3 N;

uniform float scale;

mat3 calcTBN(vec3 normal, vec3 tangent, vec3 bitangent)
{
    mat3 TBN = mat3(tangent, bitangent, normal);
    return TBN;
}

void main()
{
    gl_Position = vec4(aPos.x + aPos.x * scale, aPos.y + aPos.y * scale, aPos.z + aPos.z * scale, 1.0);
    color = aColor;
    texCoord = aTex;

    // Calculate TBN matrix and pass to fragment shader
    mat3 TBN = calcTBN(normalize(aNormal), normalize(aTangent), normalize(aBitangent));
    T = TBN[0];
    B = TBN[1];
    N = TBN[2];
}