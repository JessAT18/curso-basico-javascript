var frutas = ["Banana", "Manzana", "Pera", "Naranja", "Sandia"];

//Ver todo el array
console.log(frutas);

//Largo del array
console.log(frutas.length);

//Para mostrar "Banana"
console.log(frutas[0]);

//Buscar posicion donde se encuentra el elemento del array que coincida con el nombre
var posicion = frutas.indexOf("Pera"); //2

//Nota: No es necesario pasarle un parametro a los siguientes metodos

//Agregar elementos al final del array
var masFrutas = frutas.push("Uva");

//Quitar elementos al final del array
var ultimo = frutas.pop("Uva");

//Agregar elemento al inicio del array
var nuevaLongitud = frutas.unshift("Durazno");

//Eliminar elemento del inicio del array
var borrarFruta = frutas.shift("Durazno");
