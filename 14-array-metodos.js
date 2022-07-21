var articulos = [
    { nombre: "Bicicleta", costo: 3000 },
    { nombre: "TV", costo: 3500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 4000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 }
]

//Ninguno de estos métodos modifica el array original

//Filter: Retorna los articulos que cumplieron con la validación en un nuevo array
var articulosFiltrados = articulos.filter(function(articulo) {
    return articulo.costo <= 500
});

//Map: Trae solamente el atributo indicado, es decir un array de nombres
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

//Find: Nos ayudará a encontrar algo dentro de un artículo, devolviendonos un objeto
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

//ForEach: No genera un nuevo array, solo hace un filtrado sobre el array existente sin modificarlo.
articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});

//Some: Regresa una validación de verdadero o falso para artículos que cumplan esa validación
var articulosBaratos = articulos.some(function(articulo) {
    return articulo.costo <= 700
}); //true