const Sequelize = require('sequelize');
const db = require('../db/connection');

const TodoGroup = require('./TodoGroup');

const TodoItem = db.define('todoItem', {
  title: Sequelize.STRING,
  done: { type: Sequelize.BOOLEAN, defaultValue: 0 },
  important: { type: Sequelize.BOOLEAN, defaultValue: 0 }
});

TodoGroup.hasOne(TodoItem);

module.exports = TodoItem;
