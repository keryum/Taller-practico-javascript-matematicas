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

    const medianaCrecimiento = NewMath.calcularMediana(porcentajesCrecimiento);
    const ultimoSalario = salariosPersona[salariosPersona.length - 1];
    const proyeccionSalarial = ultimoSalario * (medianaCrecimiento + 1)
    return proyeccionSalarial
}

// Empresas - Reestructurando información

const empresas = {};

for (persona of salarios) {
    for (trabajo of persona.trabajos) {
        if (!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {};
        } 

        if (!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = [];
        }
        
        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario)
    }
}
console.log(empresas)

// mediana salarios por año en empresas

function medianaSalariosEmpresas (company, year) {
    if (!empresas[company]) {
        console.warn(`La empresa ${company} no existe`);
    } else if (!empresas[company][year]){
        console.warn(`No hay información del año ${year} en ${company}`);
    } else {
    const empresa = empresas[company]
    const SalariosYearEmpresa = empresa[year]
    const calculoMediana = NewMath.calcularMediana(SalariosYearEmpresa)
    return calculoMediana
    }
}

// proyeccionSalarialEmpresa

function proyeccionSalarialEmpresa (nombreEmpresa) {
    if (!empresas[nombreEmpresa]) {
        console.warn(`La empresa ${nombreEmpresa} no existe`)
    } else {
        const empresaYears = Object.keys(empresas[nombreEmpresa]);
        const medianaPorAños = empresaYears.map((year) => medianaSalariosEmpresas(nombreEmpresa, year))
        
        let porcentajesCrecimientoEmpresas = [];

        for (i = 1; i < medianaPorAños.length; i++) {
            const medianaActual = medianaPorAños[i];
            const medianaPasada = medianaPorAños[i-1];
            const crecimiento = medianaActual-medianaPasada;
            const porcentajeCrecimiento = crecimiento/medianaPasada;
            porcentajesCrecimientoEmpresas.push(porcentajeCrecimiento)
        }
        const medianaCrecimiento = NewMath.calcularMediana(porcentajesCrecimientoEmpresas);
        const ultimaMedianaEmpresa = medianaPorAños[medianaPorAños.length - 1]
        const nuevaMediana = ultimaMedianaEmpresa * (medianaCrecimiento + 1)
        
        return {
            medianaPorAños, 
            porcentajesCrecimientoEmpresas, 
            medianaCrecimiento, 
            ultimaMedianaEmpresa, 
            nuevaMediana,
        }
    }
}

// Análisis general de salarios

function medianaGeneral () {
    const nombres = salarios.map(persona => medianaPorPersona(persona.name))
    const medianaGeneral = NewMath.calcularMediana(nombres)
    return {
        nombres,
        medianaGeneral,
    }
}

// Top 10

function mediana10PorCiento () {
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));
    const medianasOrganizadas = NewMath.ordenarLista(listaMedianas);

    const cantidad = listaMedianas.length / 10;
    const limite = listaMedianas.length - cantidad;

    const top10 = medianasOrganizadas.slice(limite, medianasOrganizadas.length);
    const medianaTop10 = NewMath.calcularMediana(top10)
    return {
        top10,
        medianaTop10,
    }
    // let top10 = []
    // for (i = 0; i < 2; i++) {
    //     top10.push(medianasOrganizadas[i])
    // }
    // const medianaTop10 = NewMath.calcularMediana(top10)
    // return {
    //     top10,
    //     medianaTop10,
    // }
}

//Primeros 10

function mediana10Menos (salarios) {
    const personas = salarios.map(persona => persona.name)
    const medianaPorNombre = personas.map(nombre => medianaPorPersona(nombre))
    const medianasOrganizadas = medianaPorNombre.sort((a,b) => a - b)


    let Menos10 = []
    for (i = 0; i < 2; i++) {
        Menos10.push(medianasOrganizadas[i])
    }
    const mediana10Menos = NewMath.calcularMediana(Menos10)
    return {
    Menos10,
    mediana10Menos,
    }
}