import { connect } from 'react-redux';
import Nav from '../components/Nav';

const mapStateToProps = (state) => {
  debugger;

  return {
    currentRoute: state.routing.locationBeforeTransitions.pathname
  };
}

const mapDispatchToProps = (state) => {
  return {

  }
}

const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);

export default NavContainer;
