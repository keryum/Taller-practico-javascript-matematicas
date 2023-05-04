// mediana

NewMath = {}

NewMath.esImpar = function esImpar(array) { 
    return array.length%2;
}
NewMath.calcularMediana = function calcularMediana (array) {
    array.sort((a,b) => a-b);
    const arrayEsImpar = NewMath.esImpar(array);
    
    if (!arrayEsImpar) {
        const ObjetoMedianaPar1 = array[(array.length/2)-1];
        const ObjetoMedianaPar2 = array[array.length/2];
        const ObjetosMediana = [ObjetoMedianaPar1, ObjetoMedianaPar2]
        const medianaPar = NewMath.calcularPromedio (ObjetosMediana)
        return medianaPar
    } else {
        const IndexMedianaImpar = (Math.floor(array.length/2))
        const medianaImpar = array[IndexMedianaImpar]
        return medianaImpar
    }
}

// promedio
NewMath.calcularPromedio = function calcularPromedio(array) {
    // function sumarElementos(valorAcumulado, nuevoValor) {
    //     return valorAcumulado + nuevoValor;
    // }

    // const sumaTotal = array.reduce(sumaArray);

    const sumaArray = array.reduce((a,b) => a + b);
    const promedio = (sumaArray / array.length);
    return promedio;
}

// ordenar listas
NewMath.ordenarLista = function ordenarLista (array) {
    const arrayOrdenado = array.sort((a, b) => a - b);
    return arrayOrdenado;
}

// Moda

NewMath.calcularModa = function calcularModa(array) {
    const arrayCount = {};

    for (let i = 0; i < array.length; i++) {
        const element = array[i]

        if (!arrayCount[element]) {
            arrayCount[element] = 1;
        } else {
            arrayCount[element] += 1;
        }
    }
    
    const arrayOfArrays = Object.entries(arrayCount)

    arrayOfArrays.sort((a,b) => b[1]-a[1])
    
    const moda = arrayOfArrays[0][0]

    return moda
}