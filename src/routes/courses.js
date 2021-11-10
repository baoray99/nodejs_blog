const express = require('express');
const router = express.Router();
const coursesController = require('../app/controllers/courses-controller');

//nên đưa path trống / xuống dưới cùng để ko bị ăn function tương ứng
router.get('/create', coursesController.create);
router.post('/store', coursesController.store);
router.get('/:id/edit', coursesController.edit);
router.put('/:id/edit', coursesController.saveEdit);
router.delete('/:id/delete', coursesController.delete);
router.get('/:slug', coursesController.show);

module.exports = router;
