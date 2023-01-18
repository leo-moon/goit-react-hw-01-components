import './friend-list.css';

const FriendList = ({ friends }) => {
  const elementsLi = friends.map(({ id, isOnline, avatar, name}) => 
    <li key={id} className="friend-item">
      <span className="friend-status" 
        style={{ backgroundColor: isOnline? "green": "red"}}>
      </span>

      <img 
        src={avatar}
        alt="User avatar"
        className="friend-list-avatar"
      />

      <p className='friend-list-name'>{name}</p>
    </li>    
  )

  return (
    <ul className="friend-list">
      {elementsLi}
    </ul>
  )
}

export default FriendList;

FriendList.defaultProps = {
  friends: []
}