
// elementos a usar
 
let nombre, apellido, email, valCant, valSelect, importe;

nombre= document.querySelector('#name');
apellido= document.querySelector('#lastname');
email= document.querySelector('#email');
valCant= document.querySelector('#cantidad');
valSelect= document.querySelector('#selector');
importe= document.querySelector('.total');
const btnBorrar= document.querySelector('#borrar');
const btnResumen= document.querySelector('#resumen');
const precioTicket= 200;
//variables adicionales
let total;
let est=.2,trainee=.5,junior=.75;


//modificacion automatica del importe cuando ingresamos cantidad y categoria
valCant.addEventListener('input',()=>{ valCant!=null ? totalAPagar():null });
valSelect.addEventListener('input',()=>{valSelect!=null ? totalAPagar():null});

//funcion importe a pagar, calcula el total a pagar con los descuentos correspondientes segun categoria
function totalAPagar(){
    switch(valSelect.value){
        case "1" : total=precioTicket*est*valCant.value
        break;
        case "2": total=precioTicket*trainee*valCant.value
        break;
        case "3": total=precioTicket*junior*valCant.value
        break;
        default: total=precioTicket*valCant.value
        break;
    }
    importe.textContent='Total a pagar: $ '+total;
    return total; 
}
// funcion borrar, resetea los campos del form 
function borrarForm(){
    
    valSelect.value=0;
    valCant.value=null;
    nombre.value=null;
    apellido.value=null;
    email.value=null;
    importe.textContent="Total a pagar: $"
}
// funcion alerta para confirmacion de compra
function alerta() {
    swal({
        title: 'Confirmación de compra',
        text: `Nombre: ${nombre.value} \n Apellido: ${apellido.value} \n Email: ${email.value} \n Cantidad de tickets: ${valCant.value} \n Total a pagar: ${totalAPagar()}`,
        buttons: ['Cancelar', 'Aceptar']
    })
        .then((value) => {
            if (value == true) {
                swal({ title: 'Compra realizada con exito', icon: 'success' });
            } else swal({ title: 'Compra cancelada' });
        });
}
function alertCampos() {
    if (valCant.value == '' || valSelect.value == '' || nombre.value == '' || apellido.value == '' || email.value == '') {
        swal({ title: 'Debe completar todos los campos para comprar', icon: 'warning' });
    }
    else alerta() ;
}

//boton borrar 
btnBorrar.addEventListener('click',(e)=>{e.preventDefault();
    borrarForm();})

//boton resumen 
btnResumen.addEventListener('click',(e)=>{e.preventDefault();
    alertCampos();});

