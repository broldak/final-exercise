import { connect } from 'react-redux';
import Transactions from '../components/Transactions';

const mapStateToProps = (state) => {
  debugger;

  const cardIds = [];
  // const cardCounts = {};
  let cardCountArray = [];

  // collect unique card ids
  state.transactions.forEach((item) => {
    if (!cardIds.includes(item.card_id)) {
      cardIds.push(item.card_id);
    }
  });

  cardCountArray = cardIds.map((item) => {
    return state.transactions.filter((transaction) => {
      return transaction.card_id === item;
    }).length;
  });

  debugger;

  return {
    cardIds,
    cardCountArray
  };
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
