import propTypes from 'prop-types';
import styles from './style.module.css';
// import user from '../../user/user.json';

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
        items: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string,
        type: propTypes.string,
        amount: propTypes.string,
        currency: propTypes.string,
    }))
}

export default TransactionHistory;