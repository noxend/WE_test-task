const Sequelize = require('sequelize');
const db = require('../db/connection');

const TodoGroup = db.define('todoGroup', {
  title: Sequelize.STRING
});

module.exports = TodoGroup;
