import React from 'react';
import Activity from './Activity';
import { Line } from 'react-chartjs';
import { Pie } from 'react-chartjs-2';
import FilterLinkContainer from '../containers/FilterLinkContainer';

const monthLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const amountLabels = ['Less than 0', '0 to 10', '11 to 50', 'More than 50'];

const Activities = ({ activities, activityByMonth, activityByAmount }) => {
  const monthChartData = {
    labels: monthLabels,
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

  const monthChartOptions = {
    bezierCurve : false,
    datasetFill : false,
    pointDotStrokeWidth: 1,
    scaleShowVerticalLines: false,
    responsive: true,
  };

  const amountChartData = {
    labels: amountLabels,
    datasets: [
      {
        backgroundColor: [
          '#f8706c',
          '#59c6f8',
          '#979ef8',
          '#daee6f',
        ],
        hoverBackgroundColor: [
          '#b0504c',
          '#4397be',
          '#7378bd',
          '#b8c95d',
        ],
        data: activityByAmount
      }
    ]
  };

  const amountChartOptions = {
    scaleFontFamily : "'Source Sans Pro'",
    pointLabelFontFamily : "'Source Sans Pro'",
  };

  debugger;

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
      <div className='activity-charts'>
        <div className='activity-chart-container'>
          <Line data={monthChartData} options={monthChartOptions} />
        </div>
        <div className='activity-chart-container'>
          <Pie data={amountChartData} options={amountChartOptions} />
        </div>
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
