const path = require('path');
const express = require('express');

const config = require('../config');
const ApiController = require('../controllers/api.controller');

const router = express.Router();
const controller = new ApiController();
router.get('/tracks', controller.tracks.bind(controller));

module.exports = router;