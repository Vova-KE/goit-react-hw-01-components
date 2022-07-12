// import propTypes from 'prop-types';
import styles from './style.module.css';
// import user from '../../user/user.json';

const data = {
    username: "Jacques Gluke",
    tag: "jgluke",
    location: "Ocho Rios, Jamaica",
    avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
    stats: {
        followers: 5603,
        views: 4827,
        likes: 1308
    }
};

const Profile = () => {
    // console.log('data', data);

    return (
        <div className={styles.profile}>
            <div className={styles.description}>
                <img
                    src={data.avatar}
                    alt={data.username}
                    className={styles.avatar}
                />
                <p className={styles.name}>{data.username}</p>
                <p className={styles.tag}>@{data.tag}</p>
                <p className={styles.location}>{data.location}</p>
            </div>

            <ul className={styles.stats}>
                <li className={styles.listItem}>
                    <span className={styles.label}>Followers</span>
                    <span className={styles.quantity}>{data.stats.followers}</span>
                </li>
                <li className={styles.listItem}>
                    <span className={styles.label}>Views</span>
                    <span className={styles.quantity}>{data.stats.views}</span>
                </li>
                <li className={styles.listItem}>
                    <span className={styles.label}>Likes</span>
                    <span className={styles.quantity}>{data.stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

// Profile.propTypes = {
//     data: propTypes.shape({
//         username: propTypes.string,
//         tag: propTypes.string,
//         location: propTypes.string,
//         avatar: propTypes.string,
//         stats: propTypes.shape({
//             followers: propTypes.number,
//             views: propTypes.number,
//             likes: propTypes.number,
//         })
//     })
// }

export default Profile;