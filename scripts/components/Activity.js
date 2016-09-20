import React from 'react';
import { Link } from 'react-router'

const Activity = ({ onClick, name, amount, description, activity_datetime, parent_id }) => {
  const dateTime = new Date(activity_datetime).toString();
  const link = `/transaction/${parent_id}`;

  return (
    <li
      onClick={onClick}
    >
      <Link to={link}>
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
      </Link>
    </li>
  )
};

export default Activity;
