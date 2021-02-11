// PROMESAS Y ASYNC/AWAIT EN JAVASCRIPT

// Todos esta ejecucion es SINCRONO

// 1 Prioridad ejecucion
// const datos = [{
//         id: 1,
//         title: 'Iron Man',
//         year: 2008
//     },
//     {
//         id: 2,
//         title: 'Spiderman HomeComing',
//         year: 2017
//     },
//     {
//         id: 3,
//         title: 'Avengers:endGame',
//         year: 2019
//     },
// ];

// // Funcion que devuelve los datos
// const getDatos = () => {
//     return datos; // 3 Prioridad ejecucion
// };

// console.log(getDatos()); // 2 Prioridad ejecucion


// SIMULANDO UNA ASINCRONIA 
// // 1 Prioridad ejecucion
// const datos = [{
//         id: 1,
//         title: 'Iron Man',
//         year: 2008
//     },
//     {
//         id: 2,
//         title: 'Spiderman HomeComing',
//         year: 2017
//     },
//     {
//         id: 3,
//         title: 'Avengers:endGame',
//         year: 2019
//     },
// ];

// // Funcion que devuelve los datos
// const getDatos = () => {
//     // Promesa para ejecutar una asincronia OJO solo eso
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(datos);
//         }, 1500);
//     });
// };

// // Then es como el suscribe de angular Tambien se puede concatenar promesas
// // then Ejecuta UNA PROMESA
// getDatos()
//     .then(
//         response => {
//             console.log(response);
//         }).catch(error => {
//         console.log(error);
//     });

// ASYNC/AWAIT FORMA DE ESCRIBIR SINCRONO(secuencial) LAS EJECUCIONES
// Cuando hay una promesa o un Callback
// 1 Prioridad ejecucion
const datos = [{
        id: 1,
        title: 'Iron Man',
        year: 2008
    },
    {
        id: 2,
        title: 'Spiderman HomeComing',
        year: 2017
    },
    {
        id: 3,
        title: 'Avengers:endGame',
        year: 2019
    },
];

// Funcion que devuelve los datos
const getDatos = () => {
    // Promesa para ejecutar una asincronia OJO solo eso
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(datos);
        }, 1500);
    });
};

// console.log('Hola mundo 1');

async function mirarDatos() {

    try {
        console.log('Hola mundo 1');
        // Await solo es valido dentro de una funcion Asincrona
        const dato = await getDatos(); // Aqui estoy esperando los datos
        console.log(dato);

        console.log('Hola mundo 2');

    } catch (error) {
        console.log(error);
    }

}

// // Hola mundo dos
// console.log('Hola mundo 2');
// luego llamar a mirardatos
mirarDatos();