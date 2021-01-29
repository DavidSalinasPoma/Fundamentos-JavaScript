// Es como una varible global
const edad = 10;

if (true) {
	const edad = 50;
	console.log(edad);
}

console.log(edad);

// Utilizando CONST
const arrayNumero = [10, 20, 30];

arrayNumero.push(20);
arrayNumero.push(50);
arrayNumero.push(90);

console.log(arrayNumero);

// UTILIZANDO LET
let frutas = ['Naranja', 'Platano'];

frutas = ['Naranja', 'Platano', 'Mandarina'];
console.log(frutas);
frutas.push('Toronja');
console.log(frutas);

// Utilizando Objetos
const persona = {
	nombre: 'David',
	edad: 38,
};

persona.nombre = 'Evelina';
persona.edad = '36';

console.log(persona);

// FUNCIONES EN JAVASCRIPT
function sumar(a, b) {
	return a + b;
}

console.log(`La suma de 2+3 es :  ${sumar(2, 3)}`);

// Funciones de flecha

const suma = (a, b) => {
	return a + b;
};

const resultado = `La suma es: ${suma(5, 6)}`;

console.log(resultado);
