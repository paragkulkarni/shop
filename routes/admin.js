const express = require('express');
const productData = require('../controllers/products');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', productData.getProductAll);

// /admin/add-product => POST
router.post('/add-product', productData.postProductAll);

exports.routes = router;
