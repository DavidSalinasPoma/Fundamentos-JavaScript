// Array de objetos
const web = {
    nombre: 'dspDev',
    links: {
        enlace: 'www.dspdev'
    },
    redesSociales: {
        youyube: {
            enlace: 'dspDev',
            nombre: 'David Salinas'
        }
    }
};

// Accceso normal a objetos
console.log(web.redesSociales.youyube.enlace);

// Con destructuracion de objetos
const {
    redesSociales
} = web;

// Aceso indirecto
console.log(redesSociales.youyube.enlace);

// Acceso directo

const {
    youyube
} = web.redesSociales;
console.log(youyube.enlace);