import React from 'react';
import { Bar } from 'react-chartjs-2';

const Transactions = ({ cardIds, cardCountArray }) => {
  const data = {
    labels: cardIds,
    datasets: [
      {
        label: 'Transactions',
        backgroundColor: "#f8706c",
        hoverBackgroundColor: "#bd5652",
        data: cardCountArray
      }
    ]
  }

  return (
  <div>
    <h2>Transactions by Card ID</h2>
    <Bar data={data} />
  </div>
)};

export default Transactions;
