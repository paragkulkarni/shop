const express = require('express');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const rootDir = require('./util/path');
const path = require('path')
const app = express();

const bodyParser = require('body-parser');

app.engine('pug', require('pug').__express)

app.use(bodyParser.urlencoded({urlencoded: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', 'views');


app.use('/admin', adminData.routes);

app.use(shopRoutes);


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});