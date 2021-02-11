// Consumir Apis de Servidores externos
// https: //pokeapi.co/ para comsumir datos

// Importamos fetch luego de instalar con npm
const fetch = require('node-fetch');

fetch('https://pokeapi.co/api/v2/language/9/')
    .then(resp => {
        return resp.json();
    })
    .then(data => {
        console.log(data.names);

        data.names.forEach(element => {
            console.log(element.name);
        });

    })
    .catch(err => console.log(err)); // En caso de errores