import React, { Component } from 'react';

import { TodoService } from '../../services/todo.service';

import './TodoGroup.css';

import { TodoItem } from '../TodoItem';

export default class TodoGroup extends Component {
  state = {
    inputValue: '',
    data: [],
    todoItems: [],
    status: ''
  };

  service = new TodoService();

  onSubmit = e => {
    e.preventDefault();
    this.service
      .createTodoItem(this.state.inputValue, this.props.id)
      .then(() => {
        this.get();
      });
  };

  onLabelChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  delete = () => {
    this.service.deleteTodoGroup(this.props.id).then(() => {
      this.props.getData();
    });
  };

  get = () => {
    this.service
      .getTodoItemsById(this.props.id)
      .then(res => {
        this.setState({
          todoItems: [...res],
          inputValue: ''
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.get();
  }

  render() {
    const { todoItems } = this.state;

    const items = todoItems.map(({ id, title, done, todoGroupId }) => {
      return (
        <TodoItem
          get={this.get}
          key={id}
          id={id}
          title={title}
          done={done}
          todoGroupId={todoGroupId}
        />
      );
    });

    return (
      <div className="todo-group">
        <div className="todo-group__header">
          <div className="todo-group__title">{this.props.title}</div>
          <div className="todo-group__menu">
            <button onClick={this.delete}>
              <i className="far fa-trash-alt" />
            </button>
          </div>
        </div>
        <div className="todo-group__body">{items}</div>
        <div className="todo-group__bottom">
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              name="newTodo"
              value={this.state.inputValue || ''}
              placeholder="What needs to be done?"
              onChange={this.onLabelChange}
            />
            <button>
              <i className="fas fa-plus" />
            </button>
          </form>
        </div>
      </div>
    );
  }
}
