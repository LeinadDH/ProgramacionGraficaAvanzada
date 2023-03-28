#version 330 core
out vec4 FragColor;

in vec2 texCoord; // (i) Recibir las coordenadas de textura (UV) del Vertex Shader usando in
uniform sampler2D tex0; // (ii) Crear un uniform sampler2D para la textura
uniform float mirrorAxis; // (iii) Crear un uniform float para el eje de espejo (horizontal o vertical)

void main()
{
    // Calcular las nuevas coordenadas de textura (UV) reflejadas sobre el eje de espejo
    vec2 modifiedTexCoord = vec2(texCoord.x * (1.0 - mirrorAxis) + (1.0 - texCoord.x) * mirrorAxis, texCoord.y * (1.0 - mirrorAxis) + (1.0 - texCoord.y) * mirrorAxis);

    // Muestrear la textura en la posición de coordenadas UV reflejadas
    vec4 textureColor = texture(tex0, modifiedTexCoord);

    // Asignar el color muestreado al out vec4 (color de salida)
    FragColor = textureColor;
}