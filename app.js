const express = require('express');
const bodyParser = require('body-parser');

const { MongoConnect } = require('./utils/database');

const testRoutes = require('./routes/test');
const todoRoutes = require('./routes/todo');
const itemRoutes = require('./routes/item');

const app = express();
const port = 4000;

// turn off cors
app.use((req, res, next) => {
  console.log(req.method, req.path);

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );
  next();
});

app.use(bodyParser.json());

app.use(testRoutes);
app.use(todoRoutes);
app.use(itemRoutes);

MongoConnect(() => {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});
