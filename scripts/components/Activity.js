import React, { PropTypes } from 'react';

const Activity = ({ onClick, name, amount, description, activity_datetime }) => (
  <li
    onClick={onClick}
  >
    <div className='activity-field'>
      {name}
    </div>
    <div className='activity-field'>
      {description}
    </div>
    <div className='activity-field'>
      {amount}
    </div>
    <div className='activity-field'>
      {activity_datetime}
    </div>
  </li>
);

export default Activity;
