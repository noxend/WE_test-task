import React from 'react';

import './AddNewGroup.css';

const AddNewGroup = ({ showModal }) => {
  return (
    <div className="add-new-gropu">
      <button type="button" onClick={ showModal }>
        <i className="fas fa-plus" />
      </button>
    </div>
  );
}

export default AddNewGroup;
