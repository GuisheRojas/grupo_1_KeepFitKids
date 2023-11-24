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


app.use('/', mainRouter)

app.use('/users', userRouter)

app.use('/products', productRouter)

