//Hoisting

//VARIABLES

//Si mandamos a llamar a una variable antes de su declaración e inicialización, entonces
//nos retornará undefined

console.log(miNombre);

var miNombre = "Jessica";

//Como se compilan las instrucciones

var miNombre = undefined;

console.log(miNombre);

var miNombre = "Jessica";

//FUNCIONES

//Las variables y funciones se procesan antes de ejecutar cualquier código, y de esta forma se genera el hosting
//Las funciones se declaran antes que las variables.

hey();

function hey() {
    console.log(`Hola ${miNombre}`);
}

var miNombre = "Jessica";

//Como se compilan las instrucciones

function hey() {
    console.log(`Hola ${miNombre}`);
}

hey();

var miNombre = "Jessica";
