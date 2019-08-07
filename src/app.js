const express = require('express');
const exphbs = require('express-handlebars');
const compression = require('compression');
const { join } = require('path');

const controllers = require('./controllers');
const helpers = require('./views/helpers');

const app = express();

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.engine('hbs', exphbs({
  extname: 'hbs',
  layoutsDir: join(__dirname, 'views', 'layouts'),
  defaultLayout: 'main',
  partialsDir: join(__dirname, 'views', 'partials'),
  helpers,
}));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({
  extended: false,
}));
app.use(express.static(join(__dirname, '..', 'public')));
app.set('port', process.env.PORT || 3200);
app.use(controllers);

module.exports = app;
