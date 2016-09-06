import { connect } from 'react-redux';
import Activities from '../components/Activities';

const getActivities = (activities) => {
  return activities;
}

const mapStateToProps = (state) => {
  return {
    activities: getActivities(state.activities)
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
