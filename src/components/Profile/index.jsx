import propTypes from 'prop-types';
import styles from './style.module.css';
// import user from '../../user/user.json';

const Profile = ({items}) => {
    return (
        <div className={styles.profile}>
            <div className={styles.description}>
                <img
                    src={items.avatar}
                    alt={items.username}
                    className={styles.avatar}
                />
                <p className={styles.name}>{items.username}</p>
                <p className={styles.tag}>@{items.tag}</p>
                <p className={styles.location}>{items.location}</p>
            </div>

            <ul className={styles.stats}>
                <li className={styles.listItem}>
                    <span className={styles.label}>Followers</span>
                    <span className={styles.quantity}>{items.stats.followers}</span>
                </li>
                <li className={styles.listItem}>
                    <span className={styles.label}>Views</span>
                    <span className={styles.quantity}>{items.stats.views}</span>
                </li>
                <li className={styles.listItem}>
                    <span className={styles.label}>Likes</span>
                    <span className={styles.quantity}>{items.stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

Profile.propTypes = {
    data: propTypes.shape({
        username: propTypes.string,
        tag: propTypes.string,
        location: propTypes.string,
        avatar: propTypes.string,
        stats: propTypes.shape({
            followers: propTypes.number,
            views: propTypes.number,
            likes: propTypes.number,
        })
    })
}

export default Profile;