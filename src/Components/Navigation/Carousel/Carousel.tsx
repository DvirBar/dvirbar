import React, { Fragment, useState } from "react";
import styles from "./Carousel.module.css";
import CarouselContent from "./CarouselContent/CarouselContent";
import Indicators from "./Indicators/Indicators";

interface IProps {
  children: React.ReactNode;
  elementCount?: number;
}

function Carousel({ children, elementCount = 1 }: IProps): JSX.Element {
  const [xLoc, setXLoc] = useState(0);
  const length = React.Children.count(children);

  if (length > 0) {
    return (
      <div className={`${styles.carousel} noselect`}>
        <CarouselContent
          elementCount={elementCount}
          xLoc={xLoc}
          length={length}
          setXLoc={setXLoc}
        >
          {children}
        </CarouselContent>
        <Indicators
          length={length}
          elementCount={elementCount}
          xLoc={xLoc}
          setXLoc={setXLoc}
        />
      </div>
    );
  }

  return <Fragment></Fragment>;
}

export default Carousel;
