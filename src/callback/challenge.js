const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; // Importar XMLHttpRequest para Node.js
// En el navegador no es necesario importar XMLHttpRequest, ya que está disponible globalmente  
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) { // estado 0 no inicializado, 1 cargando, 2 cargado, 3 interactuando, 4 completado
            if (xhttp.status === 200) { // 200 es el estado de respuesta exitosa
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error' + url_api);
                return callback(error, null);
            }
        }else if(xhttp.readyState === 3) {
            console.log('Cargando...');
        } else if(xhttp.readyState === 2) {
            console.log('Recibiendo respuesta...');
        } else if(xhttp.readyState === 1) {
            console.log('Conectando...');
        } else if(xhttp.readyState === 0) {
            console.log('No inicializado...');
        }   
    }
    xhttp.send();
}

fetchData(`${API}/products`, function (error1, data1) {
    if (error1 ) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
        if (error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) { // ? es un operador de encadenamiento opcional, si no existe category no se ejecuta el resto
            if (error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        })
    })
})