#version 330 core
out vec4 FragColor;
uniform vec4 baseColor;
in vec2 texCoord;
uniform sampler2D tex0;

void main()
{
	//Pasar posicion UV para text2D
	FragColor = texture(tex0, texCoord);
}