import PropTypes from 'prop-types';
import styles from './profile.module.css';

const Profile = ({username, tag, location, avatar, stats})=> {
const elementsLi = stats.map( ({ label, quantity }) => 
    <li className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.quantity}>{quantity}</span>
    </li>
  )
  
  return (
    <div className={styles.profile}>
    <div className={styles.description}>
      <img
        src={avatar}
        alt="User avatar"
        className={styles.avatar}
      />
      <p className={styles.name}>{username}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
  
    <ul className={styles.stats}>
      {elementsLi}
    </ul>
  </div>
  )
}

export default Profile;

Profile.defaultProps = {
  username: "",
  tag: "", 
  location: "",
  stats: []
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape({
    label : PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired
  }))
}