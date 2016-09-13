import { connect } from 'react-redux';
import Transactions from '../components/Transactions';

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (state) => {
  return {

  }
}

const TransactionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Transactions);

export default TransactionsContainer;
