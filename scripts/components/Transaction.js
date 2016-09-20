import React from 'react';

const Transaction = ({ transaction }) => (
  <div>
    Transaction

    {transaction.amount}
    { Date(transaction.transaction_datetime) }
    {transaction.merchant_name}
    {transaction.card_entry_mode}
    {transaction.card_acceptor_name_location}

  </div>
)

export default Transaction;
