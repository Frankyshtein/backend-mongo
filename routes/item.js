const { Router } = require('express');

const { addItem } = require('../controllers/item');

const router = Router();

router.post('/add-item', addItem);

module.exports = router;
