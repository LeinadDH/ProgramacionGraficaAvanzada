#version 330 core
layout (location = 0) in vec3 aPos;
layout (location = 1) in vec3 aColor;
layout (location = 2) in vec2 aTex;

out vec3 color;
out vec2 texCoord;
out vec4 viewPos; // Agregamos una variable para la posición del vértice en espacio de vista

uniform float scale;
uniform mat4 view; // Agregamos una matriz de vista para transformar la posición del vértice

void main()
{
	gl_Position = view * vec4(aPos.x + aPos.x * scale, aPos.y + aPos.y * scale, aPos.z + aPos.z * scale, 1.0);
	color = aColor;
	texCoord = aTex;
	viewPos = view * vec4(aPos, 1.0); // Transformamos la posición del vértice a espacio de vista
}