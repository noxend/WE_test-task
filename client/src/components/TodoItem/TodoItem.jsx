import React, { Component } from 'react';

import { ItemMenu } from '../ItemMenu';

import { TodoService } from '../../services/todo.service';

export default class TodoItem extends Component {

  state = {
    isMenuShow: false
  }

  service = new TodoService();

  toggle = () => {
    this.setState({isMenuShow: !this.state.isMenuShow})
  }

  edit = (e) => {
    const el = e.target.parentNode.parentNode.parentNode.parentNode;
    el.classList.toggle('edit');
  }

  delete = () => {
    this.service.deleteTodoItem(this.props.id)
      .then(() => this.props.get())
  }

  done = () => {

  }

  render() {

    const { isMenuShow } = this.state;

    const { title, done, id } = this.props;

    return (
      <div data-id={id} className="todo-group__todo-item">
        <input type="checkbox" defaultChecked={done} />
        <span>{title}</span>
        <input type="text" />
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
