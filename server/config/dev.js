const path = require('path');

module.exports = {
  env: 'dev',
  port: 3000,
  basepath: path.join(__dirname, '../'),
  users: {
    'admin': 'admin'
  }
};