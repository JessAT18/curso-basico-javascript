//Estructura base

if (true) { //La condición debe ser verdad para poder ejecutar las instrucciones
    console.log("Hola");
}

//Usando if-else

if (true) {
    console.log("Verdad");
} else {
    console.log("Falso");
}

//Usando if-elseif

var edad = 18;

if (edad === 18) {
    console.log("Puedes votar, será tu primera votación.");
} else if(edad > 18) {
    console.log("Puedes votar.");
} else {
    console.log("Aun no puedes votar");
}

//Operador ternario

//condition ? true : false;

var numero = 1;

var resultado = numero === 1 ? "Soy uno" : "No soy uno";

console.log(resultado);