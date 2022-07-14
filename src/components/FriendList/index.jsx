import PropTypes from 'prop-types';
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
        friends: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
    }))
}

export default FriendList;