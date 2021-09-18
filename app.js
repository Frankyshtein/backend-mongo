const express = require( 'express');

const testRoutes = require('./routes/test');

const app = express();
const port = 4000;

app.use((req, res, next) => {
    console.log(req.method,req.path);

    res.append('Access-Control-Allow-Origin', '*');
    next();
})

app.use(testRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})