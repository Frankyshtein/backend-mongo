const { getDb } = require('../utils/database');

class TodoList {
  constructor(title, createDate) {
    this.title = title;
    this.createDate = createDate;
    this.lastEdit = createDate;
    this.items = [];
  }

  save() {
    const db = getDb();
    return db.collection('todoLists').insertOne(this);
  }

  static getAllTodos() {
    const db = getDb();
    return db
      .collection('todoLists')
      .find()
      .toArray()
      .catch((err) => console.log(err));
  }
}

module.exports = TodoList;
