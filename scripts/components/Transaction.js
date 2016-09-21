import React from 'react';

const Transaction = ({ transaction }) => (
  <div className='transaction'>
    <h2 className='transaction-title'>Transaction #{transaction.id}</h2>

    <h3>Amount: ${transaction.amount}</h3>
    <p>Status: <span className='value'>{transaction.status}</span></p>
    <p>Date: <span className='value'>{ Date(transaction.transaction_datetime) }</span></p>
    <p>Merchant Name: <span className='value'>{transaction.merchant_name}</span></p>
    <p>Card Entry Mode: <span className='value'>{transaction.card_entry_mode}</span></p>
    <p>Acceptor Location: <span className='value'>{transaction.card_acceptor_name_location}</span></p>

  </div>
)

export default Transaction;
