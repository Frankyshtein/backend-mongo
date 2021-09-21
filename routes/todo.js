const { Router } = require('express');

const { addTodo } = require('../controllers/todo');

const router = Router();

router.post('/add-todo', addTodo);

module.exports = router;
