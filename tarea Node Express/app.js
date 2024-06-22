var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// coloco las 3 rutas de la tarea abajo 

app.get('/primera', function (req, res,next) {
  res.send('Hola este es mi primer ejercicio con express');
});

app.get('/segunda', function (req, res,next) {
  res.send('Hola este es mi segunda ruta de prueba, estoy muy contento');
});

app.get('/tercera', function (req, res,next) {
  res.send('Hola este es mi tercera practica haciendo rutas con Node y express');
});

app.get('/cuarta', function (req, res,next) {
  res.send('Hola este es mi cuarta y ultima ruta de prueba');
});




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
