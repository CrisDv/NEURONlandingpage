const express = require('express');
const morgan = require('morgan');
const path=require('path');
const app = express();

// Db connection
const { mongoose } = require('./database');

// Settings 
app.set('port', process.env.PORT || 3008);//puerto de el servidor, si no hay puerto 3000

//Middlewares
app.use(morgan('dev'));//ver ejecuciones de el servidor
app.use(express.json());//recibir por JSON
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/api/landing', require('./routes/formsroute'));//Ruta para el api de GET y SET de la base de datos de MONGO

// Middlewares
app.use(morgan('dev'));//ver ejecuciones de el servidor
app.use(express.json());//lo de arriba pero en formato JSON
//app.use(express.urlencoded({ extended: true }));


// Static Files
console.log(__dirname)//ver en donde esta ubicado ahora mismo index.js
app.use(express.static(path.join(__dirname, 'public')))

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});