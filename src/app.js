const express = require('express');
const app = express();
const PORT = 8000;
const path = require('path');
const mainRouter = require('./routes/main');
const productRouter = require('./routes/products');
const userRouter = require('./routes/user');

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(PORT, ()=>{
    console.log(`Servidor iniciado en http://localhost:${PORT}`)
});

app.get('/', mainRouter);

app.get('/user', userRouter)

app.get('/product', productRouter)


