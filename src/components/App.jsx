import Profile from './Profile/Profile';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import Statistics from './Statistics/Statistics';
import friends from './FriendList/friends.json';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <>
      <h3>Task #1</h3>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h3>Task #2</h3>
      <Statistics title="Upload stats" stats={data} />
      <h3>Task #3</h3>
      <FriendList friends={friends} />;<h3>Task #4</h3>
      <TransactionHistory items={transactions} />;
    </>
  );
};
