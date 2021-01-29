require('dotenv').config({ path: __dirname + '/.env' })
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

//===================================
// VIEW ENGINE SETUP
//===================================
const hbs = require('hbs');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.set('view options', { layout: '/layouts/layout' })
hbs.registerPartials(__dirname + '/views/partials');

//===================================
// BODY-PARSER
//===================================
const bodyParser = require('body-parser');
app.set(bodyParser.urlencoded({ extended: true }));
app.set(bodyParser.json());

//===================================
// SESSION
//===================================
const session = require('express-session');
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  maxAge: 24 * 60 * 60 * 1000
}));

// ==================================
// PASSPORT
//===================================
const passport = require('passport');
const User = require('./models/Users');
app.use(passport.initialize());
app.use(passport.session());
app.use(require('./middlewares/loginAuth'));

passport.serializeUser((user, done) =>
{
  done(null, user.id);
});

passport.deserializeUser((id, done) =>
{
  User.findById(id, function (err, user)
  {
    done(null, user);
  });
});

//===================================
// FLASH
//===================================
const flash = require('connect-flash');
app.use(flash());
const flashMiddleware = require('./middlewares/flash');
app.use(flashMiddleware);

//===================================

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//===================================
// ROUTES
//===================================
const adminRouter = require('./routes/admin');
app.use('/', adminRouter);

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const userRouter = require('./routes/user');
app.use('/', userRouter);

//===================================
// DB CONNECTION
//===================================
require('./helpers/DBConn')

//===================================
// CATCH 404 AND FORWARD TO ERROR HANDLER 
//===================================
app.use(function (req, res, next)
{
  next(createError(404));
});

//===================================
// ERROR HANDLER
//===================================
app.use(function (err, req, res, next)
{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//===================================
// SERVER CONNECTION
//===================================
const port = 3000;
app.listen(port, () =>
{
  console.log(`Connection successfull to http://localhost:${port}`);
});

module.exports = app;
