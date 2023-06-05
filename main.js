//llamada de elementos del DOM
const cantTickets = document.querySelector("#cantidad");
const selector = document.querySelector("select");
const importe = document.querySelector("label[for=monto]");
const btnResumen = document.querySelector("#resumen");
const btnBorrar = document.querySelector("#borrar");

const precioTicket= 200;
//valor del selector ingresado por el usuario
let valSelect;
selector.addEventListener('input',()=>valSelect=selector.value);
//cantidad de tickets ingresado por el usuario
let valCant;
cantTickets.addEventListener('input',()=>valCant=cantTickets.value);

btnResumen.addEventListener('click',totalAPagar);
//funcion que calcula el valor a pagar segun los datos ingresados
let total;
function totalAPagar(){
let total;
    if(valSelect==1)total=(precioTicket*.2)*valCant
    if(valSelect==2)total=(precioTicket*.5)*valCant
    if(valSelect==3)total=(precioTicket*.75)*valCant

importe.insertAdjacentText('beforeend',total);
}
