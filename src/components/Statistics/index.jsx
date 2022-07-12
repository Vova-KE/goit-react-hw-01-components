// import propTypes from 'prop-types';
import styles from './style.module.css';
// import data from '../../data/data.json';

const datas = [
    { "id": "id-1", "label": ".docx", "percentage": 22 },
    { "id": "id-2", "label": ".pdf", "percentage": 4 },
    { "id": "id-3", "label": ".mp3", "percentage": 17 },
    { "id": "id-4", "label": ".psd", "percentage": 47 },
    { "id": "id-5", "label": ".pdf", "percentage": 10 }
];


const Statistics = () => {
    return (
    <section className={styles.statistics}>
        <h2 className={styles.title}>Upload stats</h2>

        <ul className={styles.statList}>
            <li className={styles.item}>
                    <span className={styles.label}>{datas[0].label}</span>
                    <span className={styles.percentage}>{datas[0].percentage}%</span>
            </li>
            <li className={styles.item}>
                <span className={styles.label}>{datas[0].label}</span>
                <span className={styles.percentage}>{datas[0].percentage}%</span>
            </li>
            <li className={styles.item}>
                <span className={styles.label}>{datas[0].label}</span>
                <span className={styles.percentage}>{datas[0].percentage}%</span>
            </li>
            <li className={styles.item}>
                <span className={styles.label}>{datas[0].label}</span>
                <span className={styles.percentage}>{datas[0].percentage}%</span>
            </li>
        </ul>
        </section>
    )
};

export default Statistics;