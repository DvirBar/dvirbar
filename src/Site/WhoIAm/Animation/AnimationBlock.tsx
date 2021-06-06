import React from "react";
import styles from "./AnimationBlock.module.css";
import lineContent from "./LineContent.png";

function AnimationBlock(): JSX.Element {
  return (
    <div className={styles.block}>
      <div className={styles.header}>
        <div className={styles.circle} />
        <div className={styles.circle} />
        <div className={styles.circle} />
      </div>
      <div className={styles.content}>
        <img className={styles.image} src={lineContent} />
      </div>
    </div>
  );
}

export default AnimationBlock;
