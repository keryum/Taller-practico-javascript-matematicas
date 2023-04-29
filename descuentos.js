// Precios y descuentos

function PreciosYDescuentos(precio, descuento) {
    const precioConDescuento = (precio * (100-descuento))/100;
    return {
        precioConDescuento
    }
}
const inputPrice = (document.querySelector('#price'))
const inputDiscount = (document.querySelector('#discount'))
const button = document.querySelector('#calcular')
const result = document.querySelector('#result')

button.addEventListener('click', showResult)
function showResult() {
    const price = inputPrice.value;
    const discount = inputDiscount.value;
    const newPrice = (price * (100-discount))/100;
    if (!price || !discount) {
        result.innerText = 'Por favor, llena los espacios solicitados'
    } else if (discount > 100) {
        result.innerText = 'El valor del descuento no puede ser mayor a 100'
    } else
    result.innerText = `El nuevo precio con descuento es $${newPrice}`;
}
// function renderizarElementos (header) {
//     const header = document.createElement('header')
//     const text = document.createElement('p')
//     header.appendChild(title)
//     text.textContent = 'Hola'
// }