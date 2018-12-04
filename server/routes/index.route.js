const path = require('path');
const express = require('express');

const config = require('../config');
const Controller = require('../controllers/controller');

const router = express.Router();
const controller = new Controller();
const staticAssetPath = path.join(config.basepath, '../public');
const staticAssets = express.static(staticAssetPath);

router.use('/assets', staticAssets);
router.get('/*', controller.index.bind(controller));

module.exports = router;