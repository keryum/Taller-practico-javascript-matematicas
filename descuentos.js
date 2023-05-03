// Precios y descuentos

// function PreciosYDescuentos(precio, descuento) {
//     const precioConDescuento = (precio * (100-descuento))/100;
//     return {
//         precioConDescuento
//     }
// }
// const inputPrice = (document.querySelector('#price'))
// const inputDiscount = (document.querySelector('#discount'))
// const button = document.querySelector('#calcular')
// const result = document.querySelector('#result')

// button.addEventListener('click', showResult)
// function showResult() {
//     const price = inputPrice.value;
//     const discount = inputDiscount.value;
//     const newPrice = (price * (100-discount))/100;
//     if (!price || !discount) {
//         result.innerText = 'Por favor, llena los espacios solicitados'
//     } else if (discount > 100) {
//         result.innerText = 'El valor del descuento no puede ser mayor a 100'
//     } else
//     result.innerText = `El nuevo precio con descuento es $${newPrice}`;
// }

// Cupones

const inputPrice = (document.querySelector('#price'))
const inputCupon = (document.querySelector('#cupon'))
const button = document.querySelector('#verificar-cupon')
const result = document.querySelector('#result')

button.addEventListener('click', canjearCupon)

// const cuponesObj = {
//     'Descuentito10': 10,
//     'Descuentito20': 20,
//     'Descuentito25': 25,
//     'Descuentito50': 50,
//     'Descuentito75': 75
// };

const cuponesList = []
cuponesList.push ({
    name: 'Descuentito10',
    discount: 10,
})
cuponesList.push ({
    name: 'Descuentito20',
    discount: 20,
})
cuponesList.push ({
    name: 'Descuentito30',
    discount: 30,
})
cuponesList.push ({
    name: 'Descuentito40',
    discount: 40,
})
cuponesList.push ({
    name: 'Descuentito50',
    discount: 50,
})
cuponesList.push ({
    name: 'Descuentito60',
    discount: 60,
})

function canjearCupon() {
    const cupon = inputCupon.value;
    const price = inputPrice.value;
    
if (!price || !cupon) {
    result.innerText = 'Por favor, llena los espacios solicitados';
    return;
}

let discount;

function filtro(cuponElement) {
    if (cuponElement.name === cupon) {
        return cuponElement;
    }
}

const cuponInArray = cuponesList.find(filtro);

if (cuponInArray) {
    discount = cuponInArray.discount;
} else { 
    result.innerText = `El cupón que ha ingresado es invalido`;
    return;
}

// if (cuponesObj[cupon]) {
//     discount = cuponesObj[cupon]
// } else { 
    // result.innerText = `El cupón que ha ingresado es invalido`;
    // return;
// }

    // switch (cupon) {

    //     case 'DesCuEnTiTo25': 
    //     discount = 25;
    //     break;

    //     case 'DesCuEnTiTo50':
    //     discount = 50;
    //     break;

    //     default:
    //     result.innerText = `El cupón que ha ingresado es invalido`
    //     return;
    // }

    // if (cupon === 'DesCuEnTiTo25') {
    //     discount = 25
    // } else if (cupon === 'DesCuEnTiTo50') {
    //     discount = 50
    // } else {
    //     result.innerText = `El cupón que ha ingresado es invalido`;
    //     return;
    // }

    const newPrice = (price * (100-discount))/100;
    result.innerText = `EL nuevo precio con descuento es $${newPrice}`

    console.log(cuponInArray, newPrice)
}
