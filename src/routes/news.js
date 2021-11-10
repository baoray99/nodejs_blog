const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/news-controller');

//nên đưa path trống / xuống dưới cùng để ko bị ăn function tương ứng
router.get('/:slug', newsController.show);
router.get('/', newsController.index);

module.exports = router;
