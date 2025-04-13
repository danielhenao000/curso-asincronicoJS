//promise es una forma de manejar operaciones asincronas
//challenge es una función que recibe un callback y lo ejecuta después de 3 segundos

const promise = new Promise(function(resolve, reject) {
    resolve
}); // se ejecuta una vez que se resuelve la promesa

const cows = 1; // variable que contiene el número de vacas
const countCows = new Promise(function(resolve, reject) {
    if (cows > 10) {
        resolve(`Hay ${cows} vacas`);
    } else {
        reject('No hay suficientes vacas');
    }
});

countCows.then((result) => {
    console.log(result); // se ejecuta si la promesa se resuelve
}).catch((error) => {
    console.error(error); // se ejecuta si la promesa se rechaza
}).finally(() => console.log('Fin de la promesa')); // se ejecuta siempre, independientemente de si la promesa se resuelve o se rechaza
// .then() se usa para manejar el resultado de una promesa resuelta 