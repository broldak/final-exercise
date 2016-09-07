import React from 'react';

const Activity = ({ onClick, name, amount, description, activity_datetime }) => {
  const dateTime = new Date(activity_datetime).toString();

  return (
  <li
    onClick={onClick}
  >
    <div className='activity-field'>
      {name}
    </div>
    <div className='activity-field'>
      ${amount}
    </div>
    <div className='activity-field'>
      {dateTime}
    </div>
    <div className='activity-field'>
      {description}
    </div>
  </li>
)};

export default Activity;
