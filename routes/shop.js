const rootDir = require('../util/path');
const path = require('path');
const express = require('express');
const router = express.Router();
const admin = require('./admin');

router.get('/', (req, res, next)=>{
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'), admin.products);
    
});


module.exports = router;