const express = require('express');
const app = express();
const path = require('path');

const PORT = 8000;

//Routers
const mainRouter = require('./routes/main');
const productRouter = require('./routes/products');
const userRouter = require('./routes/user');

const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');

// en el video - silvina


// Template Engine
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(session({secret: 'Secret'}))
app.use(cookies())

app.listen(PORT, ()=>{
    console.log(`Servidor iniciado en http://localhost:${PORT}`)
});

app.use('/', mainRouter)
app.use('/users', userRouter)
app.use('/products', productRouter)

