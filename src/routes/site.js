const express = require("express");
const router = express.Router();
const siteController = require("../app/controllers/site-controller");

//nên đưa path trống / xuống dưới cùng để ko bị ăn function tương ứng
router.use("/home", siteController.home);
router.use("/search", siteController.search);

module.exports = router;
