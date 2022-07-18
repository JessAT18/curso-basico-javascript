var miNombre = "Jessica"; //Se puede acceder en local

function nombre() {
    var miApellido = "Aquino"; //No se puede acceder en global
    console.log(`${miNombre} ${miApellido}`);
}

nombre();