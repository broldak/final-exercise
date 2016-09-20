import { connect } from 'react-redux';
import Transaction from '../components/Transaction';

const mapStateToProps = (state, ownProps) => {
  const id = Number(ownProps.params.id);

  const transaction = state.transactions.find((item) => id === item.id);

  return {
    transaction,
  }
}

const mapDispatchToProps = (state) => {
  return {}
}

const TransactionContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Transaction);

export default TransactionContainer;
