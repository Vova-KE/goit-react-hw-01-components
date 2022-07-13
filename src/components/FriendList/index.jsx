import propTypes from 'prop-types';
import styles from './style.module.css';
import FriendListItem from '../FriendListItem'

const FriendList = ({friends}) => {
    return (
        <ul className={styles.friendList}>
            {friends.map((friend) => (
                <FriendListItem key={friend.id} friend={friend} />
            ))}
        </ul>
    )
}

FriendList.propTypes = {
        friends: propTypes.arrayOf(propTypes.shape({
            id: propTypes.number,
    }))
}

export default FriendList;