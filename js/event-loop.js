// Programa event-loop sincrono de comportamiento normal
// function saludar() {
//     console.log('Hola Mundo');
// }

// function despedir() {
//     console.log('Adios');
// }

// function main() {
//     saludar(); // 2 puesto ejecución
//     despedir(); // 3 puesto ejecución
// }

// main(); // 1 puesto de ejecución

// Event Loop con asincronia
function saludar1() {
    console.log('Hola Mundo');
}

function despedir1() {
    console.log('Adios'); // 3
}

const main1 = () => {
    saludar1(); // 2  puesto de ejecución

    console.log('Mensaje dentro del Main'); // 3 puesto de ejecución

    return new Promise((resolve, reject) => {
        setTimeout(() => { // 4  puesto de ejecución (necesita una promesa para suejecución)
            despedir1();
        }, 2000);
    });

};

main1(); // 1   puesto de ejecución


// MODO CON PROMESAS
// function saludar() {
//     console.log('Hola Mundo');
// }

// function despedir() {
//     console.log('Adios');
// }

// function main() {
//     saludar(); // 2 puesto ejecución
//     Promise.resolve('mensaje promesa 1').then((msg) => console.log(msg)); // 4 puesto ejecución
//     Promise.resolve('mensaje promesa 2').then((msg) => console.log(msg)); // 5 puesto ejecución
//     despedir(); // 3 puesto ejecución
// }

// main(); // 1 puesto de ejecución