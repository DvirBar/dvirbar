import React from "react";
import CarouselItem from "../CarouselItem/CarouselItem";
import styles from "./CarouselContent.module.css";

interface IProps {
  children: React.ReactNode;
  elementCount: number;
  length: number;
  xLoc: number;
  setXLoc: (loc: number) => void;
}

function CarouselContent({
  children,
  elementCount,
  length,
  xLoc,
  setXLoc,
}: IProps): JSX.Element {
  const rollLeft = () => {
    setXLoc(xLoc + 100 * elementCount);
  };

  const rollRight = () => {
    setXLoc(xLoc - 100 * elementCount);
  };

  const displayRight = -(length - elementCount) * 100;

  return (
    <div className={`${styles.content} noselect`}>
      <div className={styles.nav_button}>
        {xLoc < 0 && <div onClick={rollLeft}>l</div>}
      </div>
      <div className={styles.items}>
        {React.Children.map(children, (child, index) => (
          <CarouselItem
            key={index}
            item={child}
            xLoc={xLoc}
            elementCount={elementCount}
          />
        ))}
      </div>
      <div className={styles.nav_button}>
        {xLoc > displayRight && <div onClick={rollRight}>r</div>}
      </div>
    </div>
  );
}

export default CarouselContent;
