import React from "react";
import PageCarouselItem from "./PageCarouselItem";
import { CarouselItem } from "./types";
import styles from "./PageCarousel.module.css";

interface IProps {
  carouselItems: CarouselItem[];
  selectedItemId: string;
}

function PageCarousel({ carouselItems, selectedItemId }: IProps): JSX.Element {
  return (
    <ul className={styles.page_carousel}>
      {carouselItems.map((carouselItem) => (
        <PageCarouselItem
          key={carouselItem.elementId}
          carouselItem={carouselItem}
          selectedItemId={selectedItemId}
        />
      ))}
    </ul>
  );
}

export default PageCarousel;
