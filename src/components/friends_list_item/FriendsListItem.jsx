import clsx from "clsx";
import css from "./FriendsListItem.module.scss";

const FriendsListItem = ({ avatar, name, status }) => {
  function isOnline(status) {
    return status ? "Online" : "Offline";
  }
  return (
    <li className={css.container}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>

      <p className={clsx(status ? [css.online] : [css.offline])}>
        {isOnline(status)}
      </p>
    </li>
  );
};

export default FriendsListItem;
