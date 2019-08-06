const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const controllers = require('./controllers/index');
const helpers = require('./views/helpers/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'hbs');

app.engine('hbs', exphbs({
  extname: 'hbs',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
  defaultLayout: 'main',
  helpers,
}));

app.use(express.json());
app.use(express.urlencoded({
  extended: false,
}));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('port', process.env.PORT || 3200);
// app.use(controllers);

module.exports = app;
