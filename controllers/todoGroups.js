const express = require('express');
const router = express.Router();

const TodoGroup = require('../models/TodoGroup');
const TodoItem = require('../models/TodoItem');

//створення групи
router.post('/', (req, res) => {
  const { title } = req.body;

  TodoGroup.create({ title })
    .then(result => res.send(result))
    .catch(err => res.send(err));
});

//отримання груп
router.get('/', (req, res) => {
  TodoGroup.findAll({})
    .then(result => res.send(result))
    .catch(err => res.send(err));
});

//видалення групи
router.delete('/:id', async (req, res) => {
  try {
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
  } catch (err) {
    res.send(res.send(200));
  }
});

module.exports = router;
