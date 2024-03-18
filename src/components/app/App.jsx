import { useState } from "react";
import { useEffect } from "react";

import Description from "../description/Description";
import Options from "../options/Options";
import Feedback from "../feedback/Feedback";
import Notification from "../notification/Notification";
import Chart1 from "../chart/Chart1";

import "./App.css";

const App = () => {
  const [values, setValues] = useState(() => {
    const savedStats = window.localStorage.getItem("stats");
    if (savedStats !== null) {
      return JSON.parse(savedStats);
    } else return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("stats", JSON.stringify(values));
  }, [values]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") setValues({ good: 0, neutral: 0, bad: 0 });
    else {
      setValues({
        ...values,
        [feedbackType]: values[feedbackType] + 1,
      });
    }
  };

  const totalFeedback = values.good + values.neutral + values.bad;

  return (
    <>
      <Description />
      <Options update={updateFeedback} totalFeedback={totalFeedback} />
      {!totalFeedback ? (
        <Notification />
      ) : (
        <div className="feedback">
          <Feedback stats={values} totalFeedback={totalFeedback} />
          <Chart1
            good={values.good}
            neutral={values.neutral}
            bad={values.bad}
            total={totalFeedback}
          />
        </div>
      )}
    </>
  );
};

export default App;
