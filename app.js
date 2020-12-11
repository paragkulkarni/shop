const express = require('express');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
const errorsData = require('./controllers/errors');


const app = express();

const bodyParser = require('body-parser');

// app.engine('pug', require('pug').__express)
app.engine('ejs', require('ejs').__express)


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use('/admin', adminData.routes);

app.use(shopRoutes);


app.use(errorsData.get404);

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});