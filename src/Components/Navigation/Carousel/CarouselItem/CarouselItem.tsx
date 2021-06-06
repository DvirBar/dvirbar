import React from "react";
import styles from "./CarouselItem.module.css";

interface IProps {
  item: React.ReactNode | string;
  xLoc: number;
  elementCount: number;
}

function CarouselItem({ item, xLoc, elementCount }: IProps): JSX.Element {
  const itemStyle = {
    transform: `translateX(${xLoc}%)`,
    width: `${100 / elementCount}%`,
  };

  return (
    <div style={itemStyle} className={styles.item}>
      {item}
    </div>
  );
}

export default CarouselItem;
