#version 330 core
out vec4 FragColor;
uniform vec4 color;
in vec2 texCoord;
uniform sampler2D tex0;

void main()
{
    // Muestrear la textura en la posición UV
    vec4 textureColor = texture(tex0, texCoord);

    // Multiplicar el color de la textura por el color deseado
    vec4 finalColor = vec4(textureColor * color);

    // Asignar el resultado a gl_FragColor
    FragColor = finalColor;

    //FragColor = texture(tex0, texCoord);
}