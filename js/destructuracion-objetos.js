// Destructuracion de objetos

// Objetos
const mascota = {
    nombre: 'Tom',
    edad: '10',
    vivo: true,
    raza: ['Peludo', 'Negro', 'cafe']
};

// Destructurando se utiliza llaves
const {
    edad,
    nombre,
    raza
} = mascota;

console.log(nombre);
console.log(edad);
console.log(raza);