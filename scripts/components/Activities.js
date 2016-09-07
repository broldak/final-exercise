import React from 'react';
import Activity from './Activity';
import { Line } from 'react-chartjs';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const Activities = ({ activities, activityByMonth }) => {
  const chartData = {
    labels,
    datasets: [
      {
        fillColor: "#f8706c",
        strokeColor: "#f8706c",
        pointColor: "#fff",
        pointStrokeColor: "#f8c1c3",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "#f8706c",
        data: activityByMonth
      }
    ]
  };

  const chartOptions = {
    bezierCurve : false,
    datasetFill : false,
    pointDotStrokeWidth: 1,
    scaleShowVerticalLines: false,
    responsive: true,
    scaleFontFamily : "'Source Sans Pro'",
    pointLabelFontFamily : "'Source Sans Pro'",
  };

  return (
    <div>
      <div className='activity-chart-container'>
        <Line data={chartData} options={chartOptions} />
      </div>
      <div className='activities'>
        <h2>Activities ({activities.length})</h2>

        <div className='table-header'>
          <h3>Name</h3>
          <h3>Amount</h3>
          <h3>Date/Time</h3>
          <h3>Description</h3>
        </div>

        <ul>
          {activities.map( activity =>
            <Activity
              {...activity}
            />
          )}
        </ul>
      </div>
    </div>
  );
}

export default Activities;
