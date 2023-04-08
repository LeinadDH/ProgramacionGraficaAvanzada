#version 330 core
out vec4 FragColor;
in vec4 viewPos; // Recibimos la posición del vértice en espacio de vista
in vec2 texCoord; // Recibimos las coordenadas de textura (UV) del Vertex Shader
uniform sampler2D tex0;
uniform vec3 fogColor; // Creamos un uniform vec3 para el color de la neblina
uniform float fogMinDist; // Creamos un uniform float para la distancia mínima de la neblina
uniform float fogMaxDist; // Creamos un uniform float para la distancia máxima de la neblina

void main()
{
	vec4 texColor = texture(tex0, texCoord); // Muestreamos la textura en las coordenadas UV
	float fogIntensity = clamp((length(viewPos) - fogMinDist) / (fogMaxDist - fogMinDist), 0.0, 1.0); // Calculamos la intensidad de la neblina en función de la posición del vértice en espacio de vista, la distancia mínima y máxima de la neblina
	vec3 foggedColor = mix(texColor.rgb, fogColor, fogIntensity); // Mezclamos el color muestreado con el color de la neblina usando la intensidad de la neblina calculada
	FragColor = vec4(foggedColor, texColor.a); // Asignamos el color resultante al out vec4 (color de salida)
}