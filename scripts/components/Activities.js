import React from 'react';
import Activity from './Activity';

const Activities = ({ activities }) => (
  <div className='activities'>
    <h2>Activities</h2>

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
