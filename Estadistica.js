// promedio

const array = [5, 1, 4, 3, 8, 10]


function calcularPromedio(array) {
    
    // let sumaArray = 0;

    // for (let i = 0; i < array.length; i++) {
    //     sumaArray = sumaArray + array[i];
    // }
    
    // function sumaArray(valorAcumulado, nuevoValor) {
    //     return valorAcumulado + nuevoValor;
    // }

    // const sumaTotal = array.reduce(sumaArray);

    const sumaArray = array.reduce((a, b) => a + b);

    const promedio = (sumaArray / array.length);
    return promedio
}


// mediana


const esImpar = (array) => array.length%2
function calcularMediana (array) {
    array.sort((a,b) => a-b);
    const arrayEsImpar = esImpar(array);

    if (arrayEsImpar) {
        const IndiceMedianaImpar = (Math.round(array.length/2)-1)
        return array[IndiceMedianaImpar]
    } else { 
    }
}