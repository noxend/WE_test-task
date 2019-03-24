import React, { Component } from 'react';

import { ItemMenu } from '../ItemMenu';

import { TodoService } from '../../services/todo.service';

export default class TodoItem extends Component {
  state = {
    isMenuShow: false,
    inputValue: '',
    isEditable: false
  };

  service = new TodoService();

  componentDidMount = () => {
    this.setState({ inputValue: this.props.title });

    document.addEventListener('keydown', e => {
      if (this.state.isEditable) {
        if (e.key === 'Escape') {
          this.edit();
          this.setState({ inputValue: this.props.title });
        }
      }
    });
  };

  onChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  toggle = () => {
    this.setState({ isMenuShow: !this.state.isMenuShow });
  };

  edit = () => {
    this.setState({ isEditable: !this.state.isEditable, isMenuShow: false });
  };

  delete = () => {
    this.service.deleteTodoItem(this.props.id).then(() => this.props.get());
  };

  onSubmit = e => {
    e.preventDefault();
    if (e.target.newValue.value !== this.props.title) {
      this.service
        .editTodoItem(this.props.id, e.target.newValue.value)
        .then(() => {
          this.props.get();
          this.setState({ isEditable: !this.state.isEditable });
        });
    } else {
      this.setState({ isEditable: !this.state.isEditable });
    }
  };

  done = e => {
    this.service.doneTodoItem(this.props.id, e.target.checked).then(() => {
      this.props.get();
    });
  };

  render() {
    const { isMenuShow, isEditable, inputValue } = this.state;

    const { title, done, id } = this.props;

    return (
      <div data-id={id} className="todo-group__todo-item">
        <input type="checkbox" onChange={this.done} defaultChecked={done} />
        {isEditable ? (
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              name="newValue"
              value={inputValue}
              onChange={this.onChange}
            />
          </form>
        ) : (
          <span onDoubleClick={this.edit}>{title}</span>
        )}
        <div className="todo-group__item-menu">
          <button type="button" onClick={this.toggle}>
            <i className="fas fa-ellipsis-v" />
          </button>
          {isMenuShow ? <ItemMenu edit={this.edit} del={this.delete} /> : null}
        </div>
      </div>
    );
  }
}
