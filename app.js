const express = require('express');
const app = express();

const RTodoItems = require('./controllers/todoItem');
const RTodoGroups = require('./controllers/todoGroups');

const db = require('./db/connection');

app.use(require('morgan')('dev'));
app.use(require('body-parser').urlencoded({ extended: false }));
app.use(require('body-parser').json());

db.sync()
  .then(() => {
    console.log('Database created...');
  })
  .catch(err => console.log(err));

app.use('/api/todo-items', RTodoItems);
app.use('/api/todo-groups', RTodoGroups);

module.exports = app;
