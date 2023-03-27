#version 330 core
out vec4 FragColor;

in vec2 texCoord; // (i) Recibir las coordenadas de textura (UV) del Vertex Shader usando in
uniform sampler2D tex0; // (ii) Crear un uniform sampler2D para la textura

void main()
{
    // Sumar el desplazamiento a las coordenadas de textura originales
    vec2 modifiedTexCoord = texCoord;

    // Muestrear la textura en la posición de coordenadas UV modificadas
    vec4 textureColor = texture(tex0, modifiedTexCoord);

    // Asignar el resultado a la salida (out) vec4 (color de salida)
    FragColor = textureColor;

}