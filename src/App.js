import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';

console.log({user})
console.log('t6t', user)

export function App () {
  return (
  <>

  <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
  
  </>
  )
}