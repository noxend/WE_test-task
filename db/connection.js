
const Sequelize = require('sequelize');

module.exports = new Sequelize('todo', 'root', '128500', {
  host: 'localhost',
  dialect: 'mysql'
});
