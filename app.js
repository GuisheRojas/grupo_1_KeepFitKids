const express = require('express');

const app = express();

const PORT = 8000;

const path = require('path');

app.use('/static', express.static(__dirname + '/public'));

app.listen(PORT, ()=>{
    console.log("Servidor iniciado en el puerto " + PORT);
});

app.get('/', (req, res)=>res.sendFile(__dirname + "/views/html/home.html"));

app.get('/login', (req, res)=>res.sendFile(__dirname + "/views/html/login.html"))

app.get('/productCart', (req, res)=>res.sendFile(__dirname + "/views/html/productCart.html"))