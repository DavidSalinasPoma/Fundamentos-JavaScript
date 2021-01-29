// Utilizando la libreria momentJS
const moment = require('moment'); // require


// import moment from 'moment';
// moment().format();

moment.locale('es'); // En español

const fechaHora = new Date();

const hora = fechaHora;
console.log(hora);
// moment().format('YYYY [escaped] YYYY');

const fechas = moment(hora).format('[Fecha de inscripcion: ] LLLL');

console.log(fechas);