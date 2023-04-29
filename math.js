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
    const areaTriangulo = (Math.sqrt(S*(S-lado1)*(S-lado2)*(S-lado3))).toFixed(3);
    const resultado = `El perímetro de un triángulo de lados ${lado1}${unidad}, ${lado2}${unidad} y ${lado3}${unidad} es ${perimetroTriangulo}${unidad} y el área es ${areaTriangulo}${unidad}^2`
    return {resultado}
}

console.groupEnd('Triangulo')

// altura de triángulo

function datosTriangulo (lado1, lado2, lado3, unidad) {
    const perimetro = lado1 + lado2 + lado3;
    const S = perimetro / 2;
    const area = (Math.sqrt(S*(S-lado1)*(S-lado2)*(S-lado3))).toFixed(3);
    const isosceles = 'Este triángulo es isosceles'
    const equilatero = 'Este triángulo es equilátero'
    const escaleno = 'Este triángulo es escaleno'
        if (lado1==lado2 && lado2==lado3)
        return {
            equilatero,
            perimetro,
            area,
            altura1: ((area*2)/lado1).toFixed(3) + `${unidad}`,
            altura2: ((area*2)/lado2).toFixed(3) + `${unidad}`,
            altura3: ((area*2)/lado3).toFixed(3) + `${unidad}`,
        }
        else if ((lado1==lado2 && lado2!==lado3) || (lado2==lado3 && lado3!==lado1) || (lado1==lado3 && lado3!==lado2))
        return {
            isosceles,
            perimetro,
            area,
            altura1: ((area*2)/lado1).toFixed(3) + `${unidad}`,
            altura2: ((area*2)/lado2).toFixed(3) + `${unidad}`,
            altura3: ((area*2)/lado3).toFixed(3) + `${unidad}`,
        }
        else if (lado1!==lado2 && lado2!==lado3) 
        return {
            escaleno,
            perimetro,
            area,
            altura1: ((area*2)/lado1).toFixed(3) + `${unidad}`,
            altura2: ((area*2)/lado2).toFixed(3) + `${unidad}`,
            altura3: ((area*2)/lado3).toFixed(3) + `${unidad}`,
        } 
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