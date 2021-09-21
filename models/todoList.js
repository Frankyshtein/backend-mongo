class TodoList {
  constructor(title, createDate) {
    this.title = title;
    this.createDate = createDate;
    this.lastEdit = createDate;
    this.items = [];
  }
}

module.exports = TodoList;
