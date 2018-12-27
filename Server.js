const express = require('express');
const app = express();
const http = require('http').Server(app);

const puerto = 3000;

require('./ServerDB');

app.get('/Clientes', (request, response) => {
    clientes.obtenerTodos(function(rows){
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.send(rows)
    })
});
app.post('/Clientes', (request, response) => {
    cliente = {
        nombre: request.query.nombre,
        deuda: request.query.deuda
    };
    clientes.insertar(cliente)
    response.end();
})

http.listen(puerto, () => {
    console.log('Server corriendo en el puerto ' + puerto);
});