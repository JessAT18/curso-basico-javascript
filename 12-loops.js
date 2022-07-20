var estudiantes = ["Jessica", "Leonard", "Mitchell", "Jake"];

//Tarea que va a ejecutar el loop
function saludarEstudiantes(estudiante) {
    console.log(`Hola ${estudiante}`);
}

//For
for (var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}

//ForOf
for (var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}

//While
while (estudiantes.length > 0) {
    var estudiante = estudiantes.shift();   //Quita el primer elemento y lo guarda en la variable.
    saludarEstudiantes(estudiante);
}