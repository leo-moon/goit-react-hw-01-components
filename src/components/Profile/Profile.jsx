import './profile.css';

const Profile = ({username, tag, location, avatar, stats})=> {
const elementsLi = stats.map( ({ parametr, value }) => 
    <li className="profile__item">
      <span className="label">{parametr}</span>
      <span className="quantity">{value}</span>
    </li>
  )
  
  return (
    <div className="profile">
    <div className="description">
      <img
        src={avatar}
        alt="User avatar"
        className="avatar"
      />
      <p className="name">{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
  
    <ul className="stats">
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