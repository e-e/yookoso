// node
const fs = require('fs');
const path = require('fs');

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

app.use(getLogger());
app.use(auth);

app.use('/audio', routes.audio);
app.use('/api', routes.api);
app.use('/', routes.index);

app.listen(config.port, function() {
  if (config.env === 'dev') {
    console.log(`Listening on http://localhost:${config.port}`);
  }
});

function getLogger() {
  if (config.env === 'dev') {
    return morgan('dev');
  }
  return morgan('common', {
    stream: fs.createWriteStream(
      config.logfile,
      { flags: 'a' }
    )
  });
}