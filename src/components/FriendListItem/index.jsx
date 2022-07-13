import propTypes from 'prop-types';
import styles from './style.module.css';

const FriendListItem = ({ friend }) => {
  const status = friend.isOnline ? styles.statusOnline : styles.statusOffline;

    return (
      <li className={styles.item}>
        <span className={status}>{friend.isOnline}</span>
        <img className={styles.avatar} src={friend.avatar} alt={friend.name} width="48" />
        <p className = {styles.name}>{friend.name}</p>
      </li>
    )
}

FriendListItem.propTypes = {
  friend: propTypes.shape({
    isOnline: propTypes.bool,
    avatar: propTypes.string,
    name: propTypes.string,
  })
}

export default FriendListItem;