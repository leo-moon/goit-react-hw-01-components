import './transaction-history.css';

const TransactionHistory = ({items}) => {
  const elementsTd = items.map(({id, type, amount, currency}) => 
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  )
  return (
    <>
    <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {elementsTd}
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>
    </>
  )
}

export default TransactionHistory

TransactionHistory.defaultProps = {
  items: []
}