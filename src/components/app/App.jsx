import Profile from "../profile/Profile";
import userData from "../userData.json";
import FriendsList from "../friends_list/FriendsList";
import friends from "../friends.json";
import TransactionHistory from "../transaction_history/TransactionHistory";
import transactions from "../transactions.json";
import "./App.css";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
