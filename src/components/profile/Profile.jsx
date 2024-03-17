import css from "./Profile.module.scss";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.card}>
      <div>
        <div className={css["circle-container"]}>
          <img className={css["circle-image"]} src={image} alt="User avatar" />
        </div>
        <p className={css.name}>{name}</p>
        <p className={css.data}>@{tag}</p>
        <p className={css.data}>{location}</p>
      </div>

      <ul className={css["soc-links"]}>
        <li className={css["soc-link"]}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css["soc-link"]}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css["soc-link"]}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
