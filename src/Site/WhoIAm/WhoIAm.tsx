import React from "react";
import styles from "./WhoIAm.module.css";

function WhoIAm(): JSX.Element {
  return (
    <div className={styles.container} id="who-i-am">
      <h1>Dvir Bartov</h1>
      <div className={styles.sub_title}>Full Stack Web Developer</div>
    </div>
  );
}

export default WhoIAm;
