import style from './transaction-history.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({items}) => {
  const elementsTd = items.map(({id, type, amount, currency}) => 
    <tr key={id}>
      <td className={style.td}>{type}</td>
      <td className={style.td}>{amount}</td>
      <td className={style.td}>{currency}</td>
    </tr>
  )
  return (
    <>
    <table className={style.transactionhistory}>
      <thead>
        <tr>
          <th className={style.th}>Type</th>
          <th className={style.th}>Amount</th>
          <th className={style.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {elementsTd}
      </tbody>
    </table>
    </>
  )
}

export default TransactionHistory

TransactionHistory.defaultProps = {
  items: []
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired, 
    type: PropTypes.string.isRequired, 
    amount: PropTypes.number.isRequired, 
    currency: PropTypes.string.isRequired
  }))
}