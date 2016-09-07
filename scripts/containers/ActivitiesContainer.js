import { connect } from 'react-redux';
import Activities from '../components/Activities';

const getActivities = (activities) => {
  return activities;
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
  return {
    activities: getActivities(state.activities),
    activityByMonth: groupByMonth(state.activities)
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
