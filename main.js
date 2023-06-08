//llamada de elementos del DOM
const cantTickets = document.querySelector("#cantidad");
const selector = document.querySelector("select");
const importe = document.querySelector("label[for=monto]");
const btnResumen = document.querySelector("#resumen");
const btnBorrar = document.querySelector("#borrar");
const nombre=document.querySelector('#name');
const apellido=document.querySelector('#lastname');
const email=document.querySelector('#email');


const precioTicket= 200;
//valor del selector ingresado por el usuario
let valSelect;
selector.addEventListener('input',()=>valSelect=selector.value);
//cantidad de tickets ingresado por el usuario
let valCant;
cantTickets.addEventListener('input',()=>valCant=cantTickets.value);
// nombre ingresado
let nom;
nombre.addEventListener('input',()=>nom=nombre.value);
let ap;
apellido.addEventListener('input',()=>ap=apellido.value);
let correo;
email.addEventListener('input',()=>correo=email.value);
//botones:
// boton resumen
btnResumen.addEventListener('click',alertCampos)

// boton borrar
btnBorrar.addEventListener('click',borrarForm);


selector.addEventListener('input',()=>{if(valCant!=null && valSelect!=null)totalAPagar()});
cantTickets.addEventListener('input',()=>{if(valCant!=null && valSelect!=null)totalAPagar()});


//funcion que calcula el valor a pagar segun los datos ingresados

function totalAPagar(){
let total;

    if(valSelect==1)total=(precioTicket*.2)*valCant
    if(valSelect==2)total=(precioTicket*.5)*valCant
    if(valSelect==3)total=(precioTicket*.75)*valCant

importe.textContent='Total a pagar: $ '+total;
return total;

}

function borrarForm(){
    selector.value=0;
    cantTickets.value=null;
    nombre.value=null;
    apellido.value=null;
    email.value=null;
    importe.textContent="Total a pagar: $";
}

// funcion alerta para confirmacion de compra
function alerta(){
    swal({
        title:'Confirmación de compra',
        text:`Nombre: ${nom} \n Apellido: ${ap} \n Email: ${correo} \n Cantidad de tickets: ${valCant} \n Total a pagar: ${totalAPagar()}`,
        buttons:['Cancelar','Aceptar']
    })
    .then( (value) => {
        if(value==true){
            swal({title:'Compra realizada con exito',icon:'success'})
        }else swal({title:'Compra cancelada'})
    })
}

function alertCampos(){
    if(valCant==null || valSelect==null || nom==null || ap==null || email==null){
    swal({title:'Debe completar todos los campos para comprar', icon:'warning'})}
    else alerta()
}