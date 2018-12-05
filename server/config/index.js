const path = require('path');
const env = process.env.NODE_ENV || 'dev';
/**
 * @type {Object}
 * @property {String} env
 * @property {Number} port
 * @property {String} basepath
 * @property {Object} users
 */
const options = require(`./${env}`);
const basepath = path.join(__dirname, '../');
const config = {
  basepath: basepath,
  datapath: path.join(basepath, '../data/tracks.json'),
  filespath: path.join(basepath, '../data/sanitized'),
};
module.exports = Object.assign({}, config, options);