// modules
const express = require('express');
const basicAuth = require('express-basic-auth');
const morgan = require('morgan');

// app
const config = require('./config');
const routes = require('./routes');

// vars
const app = express();
const auth = basicAuth({
  users: config.users,
  challenge: true,
});

app.use(morgan('dev'));
app.use(auth);
app.use('/', routes.index);

app.listen(config.port, function() {
  console.log(`Listening on http://localhost:${config.port}`);
});