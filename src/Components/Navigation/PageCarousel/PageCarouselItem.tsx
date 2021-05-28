import React from "react";
import { CarouselItem } from "./types";
import styles from "./PageCarousel.module.css";
import { selectItem } from "../../../Site/types";

interface IProps {
  carouselItem: CarouselItem;
  selectedItemId: string;
}

function PageCarouselItem({
  carouselItem,
  selectedItemId,
}: IProps): JSX.Element {
  const isSelectedItem = selectedItemId === carouselItem.elementId;
  const scrollToItem = (elementId: string) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <li
      className={`${styles.carousel_item} ${
        isSelectedItem ? styles.item_selected : ""
      }`}
      onClick={() => scrollToItem(carouselItem.elementId)}
    >
      <div className={styles.item_circle_wrapper}>
        <div className={styles.item_circle} />
      </div>
      <div className={styles.item_text}>{carouselItem.label}</div>
    </li>
  );
}

export default PageCarouselItem;
