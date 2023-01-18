import Profile from './Profile/Profile';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import Statistics from './Statistics/Statistics';

console.log({user})
console.log('t6t', user)

export const App = () => {
  return (
  <>

  <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />

  {/* <Statistics title="Upload stats" stats={data} /> */}
  <Statistics stats={data} />
  </>
  )
}







// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
    
//       React homework template
//       <Profile />
//     </div>
//   );
// };
