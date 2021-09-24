const TodoList = require('../models/todoList');

exports.addTodo = (req, res) => {
  // validate incoming request
  if (!req.body.title.trim()) {
    res.statusCode = 400;
    res.send('The title cannot be an empty string or contain only spaces.');
    return;
  }

  const newToDoList = new TodoList(req.body.title, new Date().getTime());

  newToDoList.save();

  res.statusCode = 200;
  res.send('success');
};

exports.getTodo = (req, res) => {
  TodoList.getAllTodos().then((todos) => res.send(todos));
};
