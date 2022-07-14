import PropTypes from 'prop-types';
import styles from './style.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <table className={styles.transactionHistory}>
            <thead className={styles.transactionTableHead}>
                <tr>
                    <th className={styles.transactionTableHeadCell}>Type</th>
                    <th className={styles.transactionTableHeadCell}>Amount</th>
                    <th className={styles.transactionTableHeadCell}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map((item) => (
                    <tr key={item.id} className={styles.transactionTableRow}>
                        <td className={styles.transactionTableCell}>{item.type}</td>
                        <td className={styles.transactionTableCell}>{item.amount}</td>
                        <td className={styles.transactionTableCell}>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
        items: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
    }))
}

export default TransactionHistory;