import css from "./Options.module.scss";
import { FaRegSmile } from "react-icons/fa";
import { FaRegFrown } from "react-icons/fa";
import { FaRegMeh } from "react-icons/fa";
import { BiReset } from "react-icons/bi";

const Options = ({ update, totalFeedback }) => {
  return (
    <ul className={css.div}>
      <li>
        <button className={css.btn} onClick={() => update("good")}>
          <FaRegSmile />
          Good
        </button>
      </li>
      <li>
        <button className={css.btn} onClick={() => update("neutral")}>
          <FaRegMeh />
          Neutral
        </button>
      </li>
      <li>
        <button className={css.btn} onClick={() => update("bad")}>
          <FaRegFrown />
          Bad
        </button>
      </li>
      {totalFeedback > 0 && (
        <li>
          <button onClick={() => update("reset")} className={css.btn}>
            <BiReset />
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
