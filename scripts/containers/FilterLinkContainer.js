import { connect } from 'react-redux';
import { setTypeFilter } from '../actions';
import Link from '../components/Link';

const mapStateToProps = (state, props) => {
  return {
    active: props.filter === state.typeFilter
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: () => {
      dispatch(setTypeFilter(props.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
