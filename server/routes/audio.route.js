const path = require('path');
const express = require('express');

const config = require('../config');
const AudioController = require('../controllers/audio.controller');

const router = express.Router();
const controller = new AudioController();
router.get('/:file', controller.serve.bind(controller));

module.exports = router;