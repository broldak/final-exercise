import { connect } from 'react-redux';
import Activities from '../components/Activities';

const getActivities = (activities, filter) => {
  switch (filter) {
    case 'TRANSACTION':
      return activities.filter(a => a.activity_type === 'transactions')
    case 'FEE':
      return activities.filter(a => a.activity_type === 'fees')
    case 'REWARD':
      return activities.filter(a => a.activity_type === 'rewards')
    case 'PAYMENT':
      return activities.filter(a => a.activity_type === 'payments')
    case 'ALL':
      return activities;
  }
}

const groupByMonth = (activities) => {
  const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  activities.forEach((activity) => {
    console.log(activity.activity_datetime);

    const date = new Date(activity.activity_datetime);
    const month = date.getMonth();

    arr[month] += 1;
  });

  return arr;
}

const mapStateToProps = (state) => {
  const activities = getActivities(state.activities, state.typeFilter);
  const activityByMonth = groupByMonth(activities);
  return {
    activities,
    activityByMonth
  };
}

const mapDispatchToProps = (state) => {
  return {

  }
}

const ActivitiesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Activities);

export default ActivitiesContainer;
