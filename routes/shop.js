const express = require('express');
const router = express.Router();
const productData = require('../controllers/products');


router.get('/', productData.getProducts);


module.exports = router;