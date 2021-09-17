const express = require( 'express');

const app = express();
const port = 4000;

app.get('/test', (req, res) => {
    res
        .append('Access-Control-Allow-Origin', '*')
        .send({text:'Hello World!'});
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})