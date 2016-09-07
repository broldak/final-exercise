import React from 'react';
import Activity from './Activity';
import { Line } from 'react-chartjs';
import FilterLinkContainer from '../containers/FilterLinkContainer';

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
      <h2>Activities ({activities.length})</h2>
      <div className='filters-list'>
        <FilterLinkContainer filter="ALL">
          All
        </FilterLinkContainer>
        <FilterLinkContainer filter="FEE">
          Fees
        </FilterLinkContainer>
        <FilterLinkContainer filter="TRANSACTION">
          Transactions
        </FilterLinkContainer>
        <FilterLinkContainer filter="REWARD">
          Rewards
        </FilterLinkContainer>
        <FilterLinkContainer filter="PAYMENT">
          Payments
        </FilterLinkContainer>
      </div>
      <div className='activity-chart-container'>
        <Line data={chartData} options={chartOptions} />
      </div>
      <div className='activities'>
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
