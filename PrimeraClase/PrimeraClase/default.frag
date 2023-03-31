#version 330 core
out vec4 FragColor;

in vec2 texCoord; // (i) Recibir las coordenadas de textura (UV) del Vertex Shader usando in
uniform sampler2D tex0; // (ii) Crear un uniform sampler2D para la textura
uniform float kernelSize; // (iii) Crear un uniform float para el tamaño del kernel de desenfoque
uniform float mirrorAxis; // (iv) Crear un uniform float para el eje de espejo (horizontal o vertical)
uniform float textureHeight; // (v) Crear un uniform float para el alto de la textura

void main()
{
    // Calcular el paso de textura vertical (1.0 / alto de la textura)
    float texStep = 1.0 / textureHeight;

    // Calcular las nuevas coordenadas de textura (UV) reflejadas sobre el eje de espejo
    vec2 modifiedTexCoord = vec2(texCoord.x * (1.0 - 0) + (1.0 - texCoord.x) * 0, texCoord.y * (1.0 - mirrorAxis) + (1.0 - texCoord.y) * mirrorAxis);
    //vec4 textureColor = texture(tex0, modifiedTexCoord);

    // Realizar el desenfoque vertical mediante un bucle que tome varias muestras de la textura, aplicando un peso (basado en una función gaussiana) y sumando los valores
    vec4 blurColor = vec4(0.0);
    float weightSum = 0.0;

    for (float i = -kernelSize; i <= kernelSize; i++)
    {
        float weight = exp(-(i * i) / (2.0 * kernelSize * kernelSize)) / (sqrt(2.0 * 3.14159265) * kernelSize);
        vec2 offset = vec2(0.0, i * texStep);
        blurColor += texture(tex0, modifiedTexCoord + offset) * weight;
        weightSum += weight;
    }

    blurColor /= weightSum;

    // Asignar el resultado del desenfoque vertical al out vec4 (color de salida)
    FragColor = blurColor;
    //FragColor = textureColor;
}