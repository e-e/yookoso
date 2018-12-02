const path = require('path');
const config = require('../config');

/**
 *
 */
class Controller {
  /**
   *
   * @param req
   * @param res
   */
  index(req, res) {
    const htmlFilePath = path.join(config.basepath, '../public/index.html');
    res.sendFile(htmlFilePath);
  }
}

module.exports = Controller;