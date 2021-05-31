import React from "react";
import LearnMore from "./LearnMore/LearnMore";
import styles from "./WhoIAm.module.css";

function WhoIAm(): JSX.Element {
  return (
    <div className={styles.container} id={"who-i-am"}>
      <div />
      <div className={styles.titles}>
        <h1 className={styles.title}>Dvir Bartov</h1>
        <div className={styles.sub_title}>Full Stack Web Developer</div>
      </div>
      <LearnMore />
    </div>
  );
}

export default WhoIAm;
