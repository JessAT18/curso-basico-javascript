//Declarativas

function myFunction() {
    return 3;
}

myFunction();

//De expresion - Funciones anonimas

var myFunction2 = function(a, b) {
    return a + b;
}

myFunction2(3, 5);

function saludarEstudiantes(estudiante) {
    //console.log(estudiante);
    console.log(`Hola ${estudiante}`);
}

function sumar(a, b) {
    var resultado = a + b;
    return resultado;
}