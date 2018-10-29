var express = require('express');
var router = express.Router();

//Require controller modules.
var feedsController = require('../controllers/feeds');

//GET feeds home page.
router.get('/', feedsController.index);

module.exports = router;
