const express = require('express');
const router = express.Router();
const meController = require('../app/controllers/me-controller');

//nên đưa path trống / xuống dưới cùng để ko bị ăn function tương ứng
router.get('/stored/courses', meController.storedCourses);

module.exports = router;
