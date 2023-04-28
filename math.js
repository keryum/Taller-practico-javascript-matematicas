// Cuadrado

console.group('Cuadrado')

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado*ladoCuadrado;

function calculosCuadrado(lado) {
    return {
        perimetro:(lado * 4),
        area:(lado*lado)
    }
}
calculosCuadrado(5)

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
});


console.groupEnd('Cuadrado')

console.group('Triangulo')

// Triángulo

function calculosTriangulo(lado1, lado2, lado3) {
    const perimetroTriangulo = lado1 + lado2 + lado3;
    const S = perimetroTriangulo / 2;
    const areaTriangulo = Math.sqrt(S*(S-lado1)*(S-lado2)*(S-lado3));
    const resultadoPerimetroTriangulo = (`El perimetro de este triángulo es ${perimetroTriangulo} cm`);
    const resultadoAreaTriangulo = (`El area de este triangulo es ${areaTriangulo} cm^2`);
    const resultado = `${resultadoPerimetroTriangulo} y ${resultadoAreaTriangulo}`;
    console.log(resultado)
}
calculosTriangulo(3,4,5)

console.groupEnd('Triangulo')