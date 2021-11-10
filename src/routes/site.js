const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/site-controller');

//nên đưa path trống / xuống dưới cùng để ko bị ăn function tương ứng
router.get('/', siteController.home);
router.get('/search', siteController.search);

module.exports = router;
