import styles from './friend-list.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  const elementsLi = friends.map(({ id, isOnline, avatar, name}) => 
    <li key={id} className={styles.item}>
      <span className={styles.status} 
        style={{ backgroundColor: isOnline? "#38e38e": "#f73f73"}}>
      </span>

      <img 
        src={avatar}
        alt="User avatar"
        className={styles.avatar}
      />

      <p className={styles.name}>{name}</p>
    </li>    
  )

  return (
    <ul className={styles.list}>
      {elementsLi}
    </ul>
  )
}

export default FriendList;

FriendList.defaultProps = {
  friends: []
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired, 
    isOnline: PropTypes.bool.isRequired, 
    avatar: PropTypes.img, 
    name: PropTypes.string.isRequired
  }))
}