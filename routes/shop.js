const rootDir = require('../util/path');
const path = require('path');
const express = require('express');
const router = express.Router();
const adminData = require('./admin');

router.get('/', (req, res, next)=>{
    const products = adminData.products;
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'), admin.products);
    res.render('shop', {prods: products, docTitle: 'Shop'});
});


module.exports = router;