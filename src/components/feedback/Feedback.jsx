import css from "./Feedback.module.scss";

const Feedback = ({ stats, totalFeedback }) => {
  return (
    <div className={css.stats}>
      <p className={css.item}>Good: {stats.good}</p>
      <p className={css.item}>Neutral: {stats.neutral}</p>
      <p className={css.item}>Bad: {stats.bad}</p>

      {totalFeedback > 0 && (
        <>
          <p className={css.item}>Total: {totalFeedback}</p>
          <p className={css.item}>
            Positive:{" "}
            {Math.round(((stats.good + stats.neutral) / totalFeedback) * 100)}%
          </p>
        </>
      )}
    </div>
  );
};

export default Feedback;
