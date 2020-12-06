const express = require('express');
const adminRoutes = require('./routes/admin');

const app = express();

const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({urlencoded: false}));

app.use('/admin', adminRoutes);


app.use((req, res, next) => {
    res.status(404).send("<h1>Page not found</h1>")
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});