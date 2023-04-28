// Cuadrado

console.group('Cuadrado')

function calculosCuadrado(lado) {
    return {
        perimetro:(lado * 4),
        area:(lado*lado)
    }
}


console.groupEnd('Cuadrado')

console.group('Triangulo')

// Triángulo

function calculosTriangulo(lado1, lado2, lado3, unidad) {
    const perimetroTriangulo = (lado1 + lado2 + lado3);
    const S = perimetroTriangulo / 2;
    const areaTriangulo = (Math.sqrt(S*(S-lado1)*(S-lado2)*(S-lado3)));
    const resultado = `El perímetro de un triángulo de lados ${lado1}${unidad}, ${lado2}${unidad} y ${lado3}${unidad} es ${perimetroTriangulo}${unidad} y el área es ${areaTriangulo}${unidad}^2`
    return {resultado}
}

console.groupEnd('Triangulo')

// altura de triángulo isósceles

function alturaTrianguloIsosceles (lado, base, unidad) {
    const altura = Math.sqrt((Math.pow(lado, 2))-((Math.pow(base, 2))/4)).toFixed(3);
    const resultado = `La altura de un triángulo de lado ${lado}${unidad} y base ${base}${unidad} es ${altura}${unidad}`
    return {resultado}
}

// Círculo

console.group('Círculo')

function calculosCirculo(radio, unidad) {
    const perimetroCirculo = 2 * Math.PI.toFixed(3) * radio;
    const areaCirculo = Math.PI.toFixed(3) * Math.pow(radio, 2);
    const resultado = `El perimetro (circunferencia) de este círculo con radio ${radio}${unidad} es ${perimetroCirculo}${unidad}, y el area es ${areaCirculo}${unidad}^2`;
    return {resultado}
}

console.groupEnd('Círculo')