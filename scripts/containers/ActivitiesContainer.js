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
    const date = new Date(activity.activity_datetime);
    const month = date.getMonth();

    arr[month] += 1;
  });

  return arr;
}

const groupByAmount = (activities) => {
  // Amount intervals will be
  // less than 0, 0 to 10, 11 to 50, greater than 50
  const arr = [0, 0, 0, 0];

  activities.forEach((activity) => {
    const floatAmount = parseFloat(activity.amount);

    if (floatAmount < 0) {
      arr[0]+=1;
    }

    if (floatAmount >= 0 && floatAmount <= 10) {
      arr[1]+=1;
    }

    if (floatAmount >= 11 && floatAmount <= 50) {
      arr[2]+=1;
    }

    if (floatAmount >= 51) {
      arr[3]+=1;
    }
  });

  debugger;
  return arr;
}

const mapStateToProps = (state) => {
  const activities = getActivities(state.activities, state.typeFilter);
  const activityByMonth = groupByMonth(activities);
  const activityByAmount = groupByAmount(activities);
  return {
    activities,
    activityByMonth,
    activityByAmount,
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
