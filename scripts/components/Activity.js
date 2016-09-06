import React, { PropTypes } from 'react';

const Activity = ({ onClick, name, amount, description, activity_datetime }) => (
  <li
    onClick={onClick}
  >
    {name}
    {description}
    {amount}
    {activity_datetime}
  </li>
);

export default Activity;
