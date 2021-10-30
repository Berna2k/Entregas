let valorProducto = parseFloat(prompt("ingrese el valor del producto en $"))
let cantCuotas = prompt("ingrese la cantidad de cuotas entre 3-6-12")
let descuento = 200
let precioDescuento = 0
const IVA = 1.21
function productoDescuento (valorProducto, descuento) {
    return valorProducto - descuento;
}

precioDescuento = productoDescuento(valorProducto, descuento)

function valorProductoIVA (precioDescuento) {
    let valorIVA = precioDescuento * IVA
    return valorIVA;
 }

let productoConIva = valorProductoIVA(precioDescuento)

function calcularValorCuota (valorIVA, cantCuotas) {
    let valorCuotas = valorIVA / cantCuotas
    return valorCuotas
}

let valorCuotas;

if (cantCuotas == "3"){
    valorCuotas = calcularValorCuota(productoConIva, 3)
   alert(`El precio con descuento final seria $${productoConIva} y se abonara en ${cantCuotas} cuotas de $${valorCuotas}`)
} else if (cantCuotas == "6"){
    valorCuotas = calcularValorCuota(productoConIva, 6)
   alert(`El precio con descuento final seria $${productoConIva} y se abonara en ${cantCuotas} cuotas de $${valorCuotas}`)
} else if (cantCuotas == "12"){
    valorCuotas = calcularValorCuota(productoConIva, 12)
   alert(`El precio con descuento final seria $${productoConIva} y se abonara en ${cantCuotas} cuotas de $${valorCuotas}`)
} else{
    console.log("Valor no valido")
    alert("Cantidad de cuotas invalida, por favor recargue la pagina")
 }