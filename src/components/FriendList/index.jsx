import propTypes from 'prop-types';
import styles from './style.module.css';
// import user from '../../user/user.json';
import FriendListItem from '../FriendListItem'

const FriendList = ({items}) => {
    return (
        <ul className={styles.friendList}>
            {items.map((item) => (
                <FriendListItem key={item.id} item={item} />
            ))}
        </ul>
    )
}

FriendList.propTypes = {
        items: propTypes.arrayOf(propTypes.shape({
            id: propTypes.number,
    }))
}

export default FriendList;