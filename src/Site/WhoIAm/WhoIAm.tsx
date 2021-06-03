import React from "react";
import useWindowDim from "../../hooks/useWindowDim";
import LearnMore from "./LearnMore/LearnMore";
import styles from "./WhoIAm.module.css";

function WhoIAm(): JSX.Element {
  const { width, height } = useWindowDim();

  return (
    <div style={{ width, height }} className={styles.container} id="who-i-am">
      <div />
      <div className={styles.titles}>
        <div className={styles.title}>Dvir Bartov</div>
        <div className={styles.sub_title}>Full Stack Web Developer</div>
      </div>
      <LearnMore />
    </div>
  );
}

export default WhoIAm;
