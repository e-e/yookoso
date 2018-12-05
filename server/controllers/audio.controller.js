const fs = require('fs');
const path = require('path');
const config = require('../config');
const Controller = require('./controller');

class ApiController extends Controller {
  stream(req, res, file) {
    fs.stat(file, function(err, stats) {
      if (err) {
        if (err.code === 'ENOENT') {
          console.log('CANT FIND IT!');
          // 404 Error if file not found
          return res.sendStatus(404);
        }
        res.end(err);
      }
      var range = req.headers.range;
      if (!range) {
        // 416 Wrong range
        return res.sendStatus(416);
      }
      var positions = range.replace(/bytes=/, "").split("-");
      var start = parseInt(positions[0], 10);
      var total = stats.size;
      var end = positions[1] ? parseInt(positions[1], 10) : total - 1;
      var chunksize = (end - start) + 1;

// poor hack to send smaller chunks to the browser
      var maxChunk = 1024 * 1024; // 1MB at a time
      if (chunksize > maxChunk) {
        end = start + maxChunk - 1;
        chunksize = (end - start) + 1;
      }

      res.writeHead(206, {
        "Content-Range": "bytes " + start + "-" + end + "/" + total,
        "Accept-Ranges": "bytes",
        "Content-Length": chunksize,
        "Content-Type": "audio/mp4"
      });

      var stream = fs.createReadStream(file, { start: start, end: end, autoClose: true })
        .on("open", function() {
          stream.pipe(res);
        }).on("error", function(err) {
          res.end(err);
        });
    });
  }
  serve(req, res) {
    const filepath = path.join(config.filespath, `${req.params.file}`);
    this.stream(req, res, filepath);
  }
}

module.exports = ApiController;