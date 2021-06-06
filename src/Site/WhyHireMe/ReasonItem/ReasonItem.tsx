import React, { useContext } from "react";
import { ThemeContext } from "../../../Components/Navigation/Navbar/ColorPicker/ThemeContext";
import { Reason } from "../types";
import styles from "./ReasonItem.module.css";

interface IProps {
  reason: Reason;
}

function ReasonItem({ reason }: IProps): JSX.Element {
  const { selectedColor } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <div className={styles.background} />
      <div className={styles.reason_wrapper}>
        <div className={styles.reason_container}>
          <h1 className={styles.reason}>{reason.reason}</h1>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: reason.description }}
          />
        </div>
      </div>
      <div className={styles.illustration}>
        {reason.icon({ width: "100%", color: selectedColor })}
      </div>
    </div>
  );
}

export default ReasonItem;
