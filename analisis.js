// Análisis personal de Juanita

function encontrarPersona(personaEnBusqueda) {
    return salarios.find(persona => persona.name == personaEnBusqueda);
}

function medianaPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    const salariosPersona = trabajos.map((elemento) => elemento.salario);
    const medianaSalariosPersona = NewMath.calcularMediana(salariosPersona);
    return medianaSalariosPersona 
}

// Proyección salarial

function proyeccionPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    const salariosPersona = trabajos.map((elemento) => elemento.salario);

    let porcentajesCrecimiento = [];

    for (let i = 1; i < salariosPersona.length; i++) {
        const salarioActual = salariosPersona[i];
        const salarioPasado = salariosPersona[i-1];
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento/salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento)
    }

    const medianaCrecimiento = NewMath.calcularMediana(porcentajesCrecimiento)
    const proyeccionSalarial = (salariosPersona[salariosPersona.length - 1]) * (medianaCrecimiento+1)
    console.log(porcentajesCrecimiento, medianaCrecimiento)
    return proyeccionSalarial
}