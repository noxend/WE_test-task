import React, { Component } from 'react';
import './App.css';

import { TodoGroup } from '../TodoGroup';
import { Nav } from '../Nav';
import { Background } from '../Background';
import { AddNewGroup } from '../AddNewGroup';
import { Modal } from '../Modal';

import { TodoService } from '../../services/todo.service';

class App extends Component {
  service = new TodoService();

  state = {
    isShowModal: false,
    todoGroups: [],
    inputValue: ''
  };

  componentDidMount() {
    this.getData();

    document.addEventListener('keydown', e => {
      if (this.state.isShowModal) {
        if (e.key === 'Escape') {
          document.querySelector('.modal-window').classList.add('m-c-hide');

          setTimeout(() => {
            this.setState({
              isShowModal: !this.state.isShowModal
            });
          }, 200);
        }
      }
    });
  }

  getData = () => {
    this.service
      .getTodoGroups()
      .then(res => {
        this.setState({
          todoGroups: res
        });
      })
      .catch(err => console.log(err));
  };

  onSubmit = e => {
    e.preventDefault();
    this.service.createTodoGroup(e.target.newGroup.value).then(() => {
      this.getData();
      this.setState({ isShowModal: false, inputValue: '' });
    });
  };

  onChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  showMenuItem = () => {
    this.setState({
      isShowMenuItem: !this.state.isShowMenuItem
    });
  };

  showModal = () => {
    this.setState({
      isShowModal: !this.state.isShowModal
    });
  };

  render() {
    const { isShowModal, todoGroups, inputValue } = this.state;

    const todoGroupsR = todoGroups.map(({ id, title }) => {
      return (
        // <div key={id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
          <TodoGroup key={id} id={id} title={title} getData={this.getData} />
        // </div>
      );
    });

    return (
      <React.Fragment>
        <Nav />
        <div className="container-fluid">
          <div className="card-columns">
            {todoGroupsR}
          </div>
        </div>
        <AddNewGroup showModal={this.showModal} />
        <Background />
        {isShowModal ? (
          <Modal
            inputValue={inputValue}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default App;
