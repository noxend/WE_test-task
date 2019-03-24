const express = require('express');
const router = express.Router();

const TodoItem = require('../models/TodoItem');

router.post('/', (req, res) => {
  const { title, todoGroupId } = req.body;

  TodoItem.create({
    title,
    todoGroupId
  })
    .then(result => res.send(result))
    .catch(err => res.send(err));
});

router.get('/:id', (req, res) => {
  TodoItem.findAll({
    where: {
      todoGroupId: req.params.id
    }
  })
    .then(result => res.send(result))
    .catch(err => res.send(err));
});

router.delete('/:id', (req, res) => {
  TodoItem.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(result => res.send(result))
    .catch(err => res.send(err));
});

router.put('/:id', (req, res) => {
  TodoItem.update({ title: req.body.title }, { where: { id: req.params.id } })
    .then(result => res.send(result))
    .catch(err => res.send(err));
});

router.put('/done/:id', (req, res) => {
  TodoItem.update({ done: req.body.done }, { where: { id: req.params.id } })
    .then(result => res.send(result))
    .catch(err => res.send(err));
});

module.exports = router;
