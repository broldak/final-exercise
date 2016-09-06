import React from 'react';
import Activity from './Activity';

const Activities = ({ activities }) => (
  <div className='activities'>
    <h2>Activities ({activities.length})</h2>

    <div className='table-header'>
      <h3>Name</h3>
      <h3>Description</h3>
      <h3>Amount</h3>
      <h3>Date/Time</h3>
    </div>

    <ul>
      {activities.map( activity =>
        <Activity
          {...activity}
        />
      )}
    </ul>
  </div>
);

export default Activities;
