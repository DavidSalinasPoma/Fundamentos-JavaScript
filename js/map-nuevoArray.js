// El metodo map genera un nuevo array apartir de otro array
// Importamos fetch luego de instalar con npm
const fetch = require('node-fetch');


async function obtenerPokemon() {

    // Async/Await
    try {
        // Esperando datos del la peticion
        // Un Await tiene que estar dentro de una funbcion asincrona
        const respuestaPokemon = await fetch('https://pokeapi.co/api/v2/pokemon/');
        // Convertir los datos Json
        const data = await respuestaPokemon.json();


        let resultado = [];
        resultado = Object.values(data.results); // Para recorrer un objeto 
        // console.log(resultado);

        // ForEah
        resultado.forEach(element => {
            console.log(element);
        });

        // MAP
        let nuevoArray = resultado.map(pokemon => {
            return pokemon.name;
        });

        console.log(nuevoArray);


    } catch (error) {
        console.log(error);
    }

}

// Ejecutamos la funcion asisncrona
obtenerPokemon();