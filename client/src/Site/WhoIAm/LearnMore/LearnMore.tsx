import React from "react";
import styles from "./LearnMore.module.css";

function LearnMore(): JSX.Element {
  const id = "what-i-know";

  const selectItem = () => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div onClick={selectItem} className={styles.learn_more}>
      LEARN MORE
    </div>
  );
}

export default LearnMore;
