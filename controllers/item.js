const Item = require('../models/item');

exports.addItem = (req, res) => {
  const newItem = new Item(req.body.description, new Date().getTime());
  newItem
    .save()
    .then((success) => res.send('success'))
    .catch((err) => console.log(err));
};
