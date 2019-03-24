const express = require('express');
const router = express.Router();

const TodoItem = require('../models/TodoItem');

router.post('/', async (req, res) => {

  const { title, todoGroupId } = req.body;

  await TodoItem.create({
    title,
    todoGroupId
  });

  res.sendStatus(200);
});


router.get('/:id', async (req, res) => {

  const result = await TodoItem.findAll({
    where: {
      todoGroupId: req.params.id
    }
  });
    
  res.json(result);
});


router.delete('/:id', async (req, res) => {
  await TodoItem.destroy({
    where: {
      id: req.params.id
    }
  });
  res.send('ok');
});

module.exports = router;
