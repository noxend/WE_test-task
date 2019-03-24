import React from 'react';

import './ItemMenu.css';

const ItemMenu = ({ edit, del }) => {
  return (
    <div className="todo-group__menu-body">
      <ul>
        <li onClick={edit} className="far fa-edit" />
        <li onClick={del}>
          <i className="far fa-trash-alt" />
        </li>
      </ul>
    </div>
  );
};

export default ItemMenu;
