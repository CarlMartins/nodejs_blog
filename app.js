const dotenv = require('dotenv').config({ path: __dirname + '/.env' })
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.set('view options', { layout: '/layouts/layout' })
hbs.registerPartials(__dirname + '/views/partials');

// MongoDb Connection
mongoose.connect(process.env.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() =>
  {
    console.log("Connection successfull to MongoDb");
  }).catch((err) =>
  {
    console.log(`Connection failed - Error: ${err}`);
  })

// Body-parser
app.set(bodyParser.urlencoded({ extended: true }));
app.set(bodyParser.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const adminRouter = require('./routes/admin');
app.use('/', adminRouter);

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const signUpRouter = require('./routes/signup');
app.use('/', signUpRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next)
{
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next)
{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Server connection
const port = 3000;
app.listen(port, () =>
{
  console.log(`Connection successfull to http://localhost:${port}`);
});

module.exports = app;
