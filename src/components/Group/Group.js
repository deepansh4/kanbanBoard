import React, { useState } from 'react';
import './Group.css';

const Group = (props) => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [statusDropdownVisible, setStatusDropdownVisible] = useState(false);
  const [priorityDropdownVisible, setPriorityDropdownVisible] = useState(false);
  const [selectedGrouping, setSelectedGrouping] = useState(''); // State to store the selected option
  const [selectedOrdering, setSelectedOrdering] = useState('');


  const toggleDisplayMenu = () => {
    setDisplayMenu(!displayMenu);
  };

  const toggleStatusDropdown = () => {
    setStatusDropdownVisible(!statusDropdownVisible);
    // Hide the priority dropdown when status is clicked
    setPriorityDropdownVisible(false);
  };

  const togglePriorityDropdown = () => {
    setPriorityDropdownVisible(!priorityDropdownVisible);
    // Hide the status dropdown when priority is clicked
    setStatusDropdownVisible(false);
  };

  const handleChange = (field, action) => {
    setSelectedGrouping(action); // Update the selected option when an option is clicked
    setStatusDropdownVisible(false); // Close status dropdown
    setPriorityDropdownVisible(false); // Close priority dropdown
    props.onSelectedValue(field);
  };

  const handlePriorityChange = (field, action) => {
    setSelectedOrdering(action);
    setStatusDropdownVisible(false); // Close status dropdown
    setPriorityDropdownVisible(false); // Close priority dropdown
    props.onOrderingValue(field);
  }

  return (
    <div>
      <button onClick={toggleDisplayMenu}>
        <div className="main-button-cont">
          <div className="main-button-prim">
            <img src='https://cdn-icons-png.flaticon.com/128/12160/12160827.png' />
          </div>

          <div className="main-button-text">Display</div>

          <div className="main-button-prim">
            <img src="https://cdn-icons-png.flaticon.com/128/10728/10728680.png" />
          </div>

        </div>
      </button>

      {displayMenu && (
        <div className="dropdown-menu">
          <div className="field">
            <div className="grouping">
              Grouping
            </div>
            <button onClick={toggleStatusDropdown} >
              <div className="main-button-cont">
                <div className="main-button-text"> {selectedGrouping || 'Status'}</div>

                <div className="main-button-prim">
                  <img src="https://cdn-icons-png.flaticon.com/128/10728/10728680.png" />
                </div>

              </div></button>
            {statusDropdownVisible && (
              <div className="sub-dropdown">
                <button onClick={() => handleChange('status', 'Status')}>Status</button>
                <button onClick={() => handleChange('user', 'User')}>User</button>
                <button onClick={() => handleChange('priority', 'Priority')}> Priority</button>
              </div>
            )}
          </div>
          <div className="field">
            <div className="ordering">
              Ordering
            </div>
            <button onClick={togglePriorityDropdown}>
              <div className="main-button-cont">
                <div className="main-button-text"> {selectedOrdering || 'Priority'}</div>

                <div className="main-button-prim">
                  <img src="https://cdn-icons-png.flaticon.com/128/10728/10728680.png" />
                </div>

              </div></button>
            {priorityDropdownVisible && (
              <div className="sub-dropdown">
                <button onClick={() => handlePriorityChange('priority', 'Priority')}>Priority</button>
                <button onClick={() => handlePriorityChange('title', 'Title')}>Title</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Group;



