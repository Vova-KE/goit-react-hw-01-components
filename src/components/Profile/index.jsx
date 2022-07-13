import propTypes from 'prop-types';
import styles from './style.module.css';

const Profile = ({username, tag, location, avatar, stats}) => {
    return (
        <div className={styles.profile}>
            <div className={styles.description}>
                <img
                    src={avatar}
                    alt={username}
                    className={styles.avatar}
                />
                <p className={styles.name}>{username}</p>
                <p className={styles.tag}>@{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>

            <ul className={styles.stats}>
                <li className={styles.listItem}>
                    <span className={styles.label}>Followers</span>
                    <span className={styles.quantity}>{stats.followers}</span>
                </li>
                <li className={styles.listItem}>
                    <span className={styles.label}>Views</span>
                    <span className={styles.quantity}>{stats.views}</span>
                </li>
                <li className={styles.listItem}>
                    <span className={styles.label}>Likes</span>
                    <span className={styles.quantity}>{stats.likes}</span>
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