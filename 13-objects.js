var miAuto = {
    marca: "Suzuki",
    modelo: "Swift",
    year: 2022,
    detalleDelAuto: function() {
        console.log(`Auto: ${this.modelo} ${this.year}`);
    }
};

//Para acceder a los valores de un objeto

miAuto.marca;               //Suzuki
miAuto.year;                //2022
miAuto.detalleDelAuto();    //Auto: Swift 2022

//Funcion constructora

function auto(marca, modelo, year) {
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;
}

var autoNuevo = new auto("Toyota", "Corolla", 2020);

var miAutonUevo = new auto("Tesla", "Model 3", 2022);