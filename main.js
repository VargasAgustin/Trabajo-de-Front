//llamada de elementos del DOM
const cantTickets = document.querySelector("#cantidad");
const selector = document.querySelector("select");
const importe = document.querySelector("label[for=monto]");
const btnResumen = document.querySelector("#resumen");
const btnBorrar = document.querySelector("#borrar");
const nombre=document.querySelector('#name');
const apellido=document.querySelector('#apellido');
const email=document.querySelector('#email');

const precioTicket= 200;
//valor del selector ingresado por el usuario
let valSelect;
selector.addEventListener('input',()=>valSelect=selector.value);
//cantidad de tickets ingresado por el usuario
let valCant;
cantTickets.addEventListener('input',()=>valCant=cantTickets.value);
//botones resumen y borrar
btnResumen.addEventListener('click',totalAPagar);
btnBorrar.addEventListener('click',borrarForm);
//funcion que calcula el valor a pagar segun los datos ingresados

function totalAPagar(){
let total;


    if(valSelect==1)total=(precioTicket*.2)*valCant
    if(valSelect==2)total=(precioTicket*.5)*valCant
    if(valSelect==3)total=(precioTicket*.75)*valCant

importe.textContent='Total a pagar: $ '+total;

}

function borrarForm(){
    selector.value=0;
    cantTickets.value=null;
    importe.textContent="Total a pagar: $";
}
