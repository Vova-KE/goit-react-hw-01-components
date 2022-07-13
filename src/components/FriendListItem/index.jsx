import propTypes from 'prop-types';
import styles from './style.module.css';
// import user from '../../user/user.json';

const FriendListItem = ({ item }) => {
    return (
      <li className={styles.item}>
        <span className={styles.status}>{item.isOnline}</span>
        <img className={styles.avatar} src={item.avatar} alt={item.name} width="48" />
        <p className = {styles.name}>{item.name}</p>
      </li>
    )
}

FriendListItem.propTypes = {
  item: propTypes.shape({
    isOnline: propTypes.bool,
    avatar: propTypes.string,
    name: propTypes.string,
  })
}

export default FriendListItem;