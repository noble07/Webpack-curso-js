/*Toda la documentacion se puede encontrar en Mozilla developer network */

import '../styles/index.scss';
// forEach
function sendCar(day, ...carIds) {
  carIds.forEach(id => console.log(id));
}


sendCar('Monday', 100, 250, 500);

//Destructurin an array
let carIds = [100, 200, 300];
let [car1, car2, ...theRest] = carIds;

console.log(car1, car2, theRest);


// Destructurin an object
let car = {
  id: 5000,
  style: 'convertible'
};
let id, style;
({
  id,
  style
} = car);

console.log(id, style);

// spread syntax
function starCars(car1, car2, car3) {
  console.log(car1, car2, car3);
}

let carides = 'abc';
starCars(...carides);

//function Scope
function starCar(carId) {
  let message = 'Starting...';
  let startFn = function turnKey() {
    let message = 'Override';
  };
  startFn();
  console.log(message);
}

starCar(123);


//block scope
let message1 = 'Outside';
if (5 === 5) {
  let message1 = 'Equal';
  console.log(message1);
}
console.log(message1);

//IIFE
let app = (function () {
  let carId = 123;
  console.log('In function');
  return {};
})();

//Clase
class car {
  constructor() {

  }
}

/*--------------------------------Asi se importa un modulo js--------------------------------------- */

/*import { Car } from './models/car.js';  -- Asi se utiliza para importar un modulo
                                          -- al importarlo index.js quedario funcionado como un modulo

let car = new Car(123);
console.log(car.id); */

/*----------------------------------------------------------------------------------------------------*/


//LEER DOCUMENTACION DE timers
//LEER DOCUMENTACION objeto document
//LEER DOCUMETNACION Window

/*-----------------------------------Modificar elementos de DOM---------------------------------------- */

let element = document.getElementById('first'); //Asi se seleccionan un elemento por id

element.textContent = 'New content...'; //Se usa para cambiar el texto del elemento seleccionado
//una etiqueta p,div...

element.setAttribute('foo', 'fooValue'); //Se usa para agregar una atributo nuevo a el elemento
//.setAttribute('nombreAtributo', 'valorAtributo')

element.classList.add('p2'); //Añade una clase al elemento seleccionado

element.style.color = 'blue'; //Accedemos a la propiedad css del elemento seleccionado y cambiamos el color                            

console.log(element);


/*----------------------------------------Try - Catch -------------------------------------------- */
try {
  let car = newCar;

  throw new Error('my custom error'); // throw se utiliza para mandar un mesaje de error personalizado
  // al catch
} catch (error) {
  console.log('error: ' + error);
} finally { //El finally tiene codigo que siempre se ejecuta 
  console.log('this always execute'); //sin importar si salta el try catch
}


console.log('continuing...');

//LEER DOCUMENTACION DEL OBJETO Error

/*-------------------------------------------Promise------------------------------------------- */
// Se utilizan con javascript asincrono (timers, http calls)
//LEER DOCUMENTACION DE promise

let promise = new Promise( //Se crea promise y se le pasa como argumento una function
  function (resolve, reject) { //Esta function recibe otras 2 function como parametros y se ejecuta inmediatamente cuando 
    setTimeout(resolve, 100, 'someValue'); //La function resolve se ejecutara luego de 100 ms
    //y se le va a pasar como parametro 'someValue'  
    //resolve se utiliza cuando la promise se ejecuta bien SI NO se utiliza reject
  }
);

promise.then( //Se utiliza para obtener el valor de nuestra promise
  value => console.log('fulfilled: ' + value), //Esta funcion se ejecuta cuando se ejecuta exitasamente la function promise
  error => console.log('rejected: ' + error) //Esta se ejecuta si ocurre un error
);


//LEER DOCUMENTACION DE jquery con http


/*-------------------------------------------- Forms --------------------------------------------- */

import $ from 'jquery'; //Se importa la libreria jquery el $ es el nombre del objeto de jquery por convencion

let form = document.getElementById('user-form'); //Se accede a los campos del form con el id del form

form.addEventListener('submit', event => {
  //Prevent the browser from submitting the form
  let user = form.elements['user']; //Accedemos a la informacion de los input con el .elements llevandole
  // el 'name' del input lo que nos retorna un objeto en la variable user
  let avatarFile = form.elements['avatar-file'];
  let userError = document.getElementById('user-error');

  if (user.value.length < 4) {
    userError.textContent = 'Invalyd entry';
    userError.style.color = 'red';
    user.style.borderColor = 'red';
    user.focus();

    event.preventDefault();
  }

  let posting = { //Se obtiene la informacion de el form y se almacenan en este objeto
    user: user.value, //con el metodo .value accedemos a dato que se envio del input
    avatarFile: avatarFile.value

  };

  let promise = $.post( //Primero iria la URL donde se va a hacer el POST y luego la informacion
    "Aca iria la URL de el servidor al que se le va a hacer el post", posting
  );

  promise.then(
    data => console.log('success: ', data),
    error => console.log('error: ', error)
  );
  event.preventDefault(); //Se llama este metodo para que el form no haga el submite al browser
  //porque ya lo estamos haciendo manual con el jquery
});


/* ----------------------------- Reglas de Seguridad ---------------------------------------- */
// NUNCA COLOCAR INFORMACION IMPORTANTE EN VARIABLES EL LOS ARCHIVOS JAVASCRIPT DE EL LADO DEL CLIENTE
// NO UTILIZAR VARIABLES GLOBALES
// ASUMIR QUE TODA LA INFORMACION DEL CLIENTE ESTA SIENDO REVISADA (hacker)
// EVITAR LA FUNCTION EVAL() ASI EVITAMOS INJECTIONS

/* ---------------------------------------------------------------------------------------------- */

// LEER DOCUMENTACION javascript obfuscator




/*---------------------------Para Ataques Man-in-the-middle----------------------------------------- */
// USAR SSL <- Leer acerca de esto.
// Usar HTTP Header: Stric-Transport-Security <- Leer acerca de esto.
// Aguarse de que las Cookies son seguras, si estamos usando SSL hay que asegurase de que se 
// transfieran por SSL y hay atributos en Cookies para esto: Secure y HttpOnly <- Leer acerca de esto
/* ------------------------------------------------------------------------------------------------- */



/* ---------------------- Para Ataques Cross-site Scripting (xss) ----------------------------------- */
// CSP: Content Security Policy usa un HTTP Header: Content-Security-Policy <- Leer acerca de esto
// CORS: Cross Origin Resource Sharing usa un HTTP Header: Acces-Control-Allow-Sharing <- Leer acerca de esto