import React from "react";
import ReasonItem from "./ReasonItem/ReasonItem";
import { reasons } from "./Reasons";
import styles from "./WhyHireMe.module.css";

function WhyHireMe(): JSX.Element {
  return (
    <div className={styles.page} id="why-hire-me">
      <div className={styles.container}>
        {reasons.map((reason, index) => (
          <ReasonItem key={index} reason={reason} />
        ))}
      </div>
    </div>
  );
}

export default React.memo(WhyHireMe);
