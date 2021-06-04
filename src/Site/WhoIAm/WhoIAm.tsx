import React from "react";
import useWindowDim from "../../hooks/useWindowDim";
import AnimationBlock from "./Animation/AnimationBlock";
import Loadbar from "./Animation/Loadbar";
import Boxes from "./Boxes";
import LearnMore from "./LearnMore/LearnMore";
import styles from "./WhoIAm.module.css";

function WhoIAm(): JSX.Element {
  const { width, height } = useWindowDim();

  const dims = width >= 650 ? 500 : "95%";

  return (
    <div
      style={{
        width,
        height,
      }}
      className={styles.wrapper}
      id="who-i-am"
    >
      <div className={styles.container}>
        <div />
        <div className={styles.titles}>
          <div className={styles.title}>Dvir Bartov</div>
          <div className={styles.sub_title}>Full Stack Web Developer</div>
        </div>
        <Boxes className={styles.image} width={dims} color="#b100a8" />
      </div>
    </div>
  );
}

export default WhoIAm;
