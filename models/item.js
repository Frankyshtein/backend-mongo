const { getDb } = require('../utils/database');

class Item {
  constructor(description, createDate) {
    this.description = description;
    this.createDate = createDate;
    this.fulfilled = false;
  }

  save() {
    return getDb().collection('items').insertOne(this);
  }
}

module.exports = Item;
