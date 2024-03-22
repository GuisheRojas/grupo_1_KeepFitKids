const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors')

const PORT = 8000;

const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');
const userLoggedMiddleware = require('./middlewares/users/userLoggedMiddleware');

//Routers
const mainRouter = require('./routes/main');
const productRouter = require('./routes/products');
const userRouter = require('./routes/user');

//APIs Routers
const usersApiRouter = require('./routes/api/usersApiRoutes');
const productsApiRouter = require('./routes/api/productsApiRoutes');

// Template Engine
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(session({secret: 'Secret',
    resave: false,
    saveUninitialized: false}))
app.use(cookies())
app.use(userLoggedMiddleware);
app.use(cors());

app.listen(PORT, ()=>{
    console.log(`Servidor iniciado en http://localhost:${PORT}`)
});

//use routers
app.use('/', mainRouter);
app.use('/users', userRouter);
app.use('/products', productRouter);

//use API routers
app.use('/api/users', usersApiRouter);
app.use('/api/products', productsApiRouter);