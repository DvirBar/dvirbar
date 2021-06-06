import React, { useContext } from "react";
import { ThemeContext } from "../../Components/Navigation/Navbar/ColorPicker/ThemeContext";
import useWindowDim from "../../hooks/useWindowDim";
import Boxes from "./Boxes";
import styles from "./WhoIAm.module.css";
import github from "../../assests/icons/github.png";
import linkedin from "../../assests/icons/linkedin.jpg";

function WhoIAm(): JSX.Element {
  const { width, height } = useWindowDim();

  const dims = width >= 650 ? 500 : "95%";

  const { selectedColor } = useContext(ThemeContext);

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
          <div className={styles.social}>
            <a
              href="https://github.com/DvirBar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={styles.social_image} src={github} />
            </a>
            <a
              href="https://www.linkedin.com/in/dvir-bartov-116215194/"
              target="_blank"
              className={styles.link_item}
              rel="noopener noreferrer"
            >
              <img className={styles.social_image} src={linkedin} />
            </a>
          </div>
        </div>
        <Boxes className={styles.image} width={dims} color={selectedColor} />
      </div>
    </div>
  );
}

export default React.memo(WhoIAm);
