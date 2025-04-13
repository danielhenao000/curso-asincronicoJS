function suma(a, b) {
    return a + b;
}

function calc(a,b, callback) {
    return callback(a,b);   
}

function calc2(a,b, sumar) {
    return sumar(a,b);   
}

console.log(calc(2, 3, suma)); // 5, no se pone parentesis en la función porque no se hace llamado inmediato 

setTimeout(function() {
    console.log('Hola soy un setTimeout');  
}, 2000); // 2 segundos

function saludo(nombre) {
    console.log(`Hola ${nombre}`);
}

setTimeout(saludo, 2000, 'Pepe'); // 2 segundos
