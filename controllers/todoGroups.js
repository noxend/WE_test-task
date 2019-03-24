const express = require('express');
const router = express.Router();

const TodoGroup = require('../models/TodoGroup');
const TodoItem = require('../models/TodoItem');

//створення групи
router.post('/', async (req, res) => {
  const { title } = req.body;

  await TodoGroup.create({ title });
  res.sendStatus(200);
});

//отримання груп
router.get('/', async (req, res) => {
  const result = await TodoGroup.findAll({});

  res.send(result);
});

//видалення групи
router.delete('/:id', async (req, res) => {
  
  await TodoItem.destroy({
    where: {
      todoGroupId: req.params.id
    }
  });

  await TodoGroup.destroy({
    where: {
      id: req.params.id
    }
  });

  res.send(200);
});

module.exports = router;
