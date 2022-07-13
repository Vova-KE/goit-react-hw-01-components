import propTypes from 'prop-types';
import styles from './style.module.css';
// import data from '../../data/data.json';
import getRandomHexColor from '../color';

const Statistics = ({items}) => {
    return (
    <section className={styles.statistics}>
        <h2 className={styles.title}>Upload stats</h2>

            <ul className={styles.statList}>
                {items.map((item) => (
                    <li className={styles.item} key={item.id} style={{ backgroundColor: getRandomHexColor() }}>
                    <span className={styles.label}>{item.label}</span>
                    <span className={styles.percentage}>{item.percentage}%</span>
            </li>
                ))}
        </ul>
        </section>
    )
};

Statistics.propTypes = {
        items: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string,
        label: propTypes.string,
        percentage: propTypes.number,
    }))
}

export default Statistics;