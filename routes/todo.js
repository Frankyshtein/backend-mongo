const { Router } = require('express');

const { addTodo, getTodo } = require('../controllers/todo');

const router = Router();

router.post('/add-todo', addTodo);

router.get('/todos', getTodo);

module.exports = router;
