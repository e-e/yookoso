const env = process.env.NODE_ENV || 'dev';
/**
 * @type {Object}
 * @property {String} env
 * @property {Number} port
 * @property {String} basepath
 * @property {Object} users
 */
const config = require(`./${env}`);
module.exports = config;