const express = require('express');
const app = express();
const path = require('path');

const PORT = 8000;
const mainRouter = require('./routes/main');
const productRouter = require('./routes/products');
const userRouter = require('./routes/user');
const bodyParser = require('body-parser');

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, 'views'));

app.listen(PORT, ()=>{
    console.log(`Servidor iniciado en http://localhost:${PORT}`)
});


app.get('/', mainRouter)

app.get('/login', userRouter)

app.get('/register', userRouter)

app.get('/productCart', productRouter)

app.get('/detailproduct', productRouter)

app.get('/productCart/:id', productRouter)

app.get('/detailproduct/:id', productRouter)

app.get('/nenes', productRouter)

app.get('/nenas', productRouter)

app.get('/getProduct', productRouter)

app.get("/addProduct", productRouter)

app.get('/editProduct', productRouter)

app.get("/modifiedProduct", productRouter)
