import React from 'react';

import './Modal.css';

const Modal = ({inputValue, onChange, onSubmit}) => {
  return (
    <div className="modal-window">
      <div className="modal-window__content">
        <div className="modal-window__header">
          <div className="modal-window__title">Add new todo group</div>
        </div>
        <div className="modal-window__body">
          <form onSubmit={onSubmit}>
            <input onChange={onChange} value={inputValue} type="text" name="newGroup" placeholder="Group name" />
            <button type="submit">
              <i className="fas fa-plus" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
