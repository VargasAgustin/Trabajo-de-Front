const cant = document.querySelector("#cantidad");
const selector = document.querySelector("select");
const importe = document.querySelector("label[for=monto]");

const btnResumen = document.querySelector("#resumen");
const btnBorrar = document.querySelector("#borrar");


const precioTicket= 200;

// let descuento;
// selector.addEventListener('change', descuento => descuento=selector.value);

// prueba 
let des = selector.value;
selector.addEventListener('change',()=>des=selector.value)
btnResumen.addEventListener('click',console.log(des))


function total(){
    let impo=200;
    let des = selector.addEventListener('change',a=>a=selector.value);
    
    // switch(selector.addEventListener('change',descuento=>descuento=selector.value)){
    //     case 1 : (impo=impo*.2)
    //     break;
    //     case 2 : impo = impo*.5
    //     break;
    //     case 3 : impo = impo*.75
    //     break;
       
    // }
    // impo=impo*(cant.value);
    return impo;
}

// btnResumen.addEventListener('click',()=>{
// importe.insertAdjacentHTML("beforeend",total());
// });
// btnBorrar.addEventListener('click',);


// cant.addEventListener('input',()=> console.log(cant.value));

// selector.addEventListener("click",() => { let valopt = selector.value;}); 