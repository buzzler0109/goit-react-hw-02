import FriendsListItem from "../friends_list_item/FriendsListItem";
import css from "./FriendsList.module.scss";
const FriendsList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map((friend) => {
        return (
          <FriendsListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            status={friend.isOnline}
          />
        );
      })}
    </ul>
  );
};

export default FriendsList;
