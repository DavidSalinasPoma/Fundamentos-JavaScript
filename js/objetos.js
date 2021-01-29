// Objetos
const mascota = {
    nombre: 'Tom',
    edad: '10',
    vivo: true
};

// Print tofo el objeto
console.log(mascota);

// Imprimir atributos del objeto
console.log(mascota.nombre);
console.log(mascota.edad);
console.log(mascota.vivo);

// Aumentando atributos en tiempo de ejecución
mascota.id = 1;
console.log(mascota);

// Umentando un Array en el Objeto
mascota.razas = ['Peludo', 'Negro', 'Rambo'];

console.log(mascota.razas);
console.log(mascota.razas[0]);
// Recorriendo el array
mascota.razas.forEach(element => {
    console.log(element);
});