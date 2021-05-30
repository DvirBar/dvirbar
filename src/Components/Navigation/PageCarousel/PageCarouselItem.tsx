import React, { useEffect, useRef } from "react";
import { CarouselItem, SelectedDims } from "./types";
import styles from "./PageCarousel.module.css";
import { SelectedItem } from "../../../Site/types";

interface IProps {
  carouselItem: CarouselItem;
  selectedItem: SelectedItem;
  selectDims: (dims: SelectedDims) => void;
}

function PageCarouselItem({
  carouselItem,
  selectedItem,
  selectDims,
}: IProps): JSX.Element {
  const isSelectedItem = selectedItem.elementId === carouselItem.elementId;
  const scrollToItem = (elementId: string) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (isSelectedItem) {
      selectDims({
        width: ref.current?.offsetWidth || 0,
        offset: ref.current?.offsetLeft || 0,
      });
    }
  }, [ref, isSelectedItem]);

  return (
    <li
      ref={ref}
      className={`${styles.carousel_item} ${
        isSelectedItem ? styles.item_selected : ""
      }`}
      onClick={() => scrollToItem(carouselItem.elementId)}
    >
      <div className={styles.item_text}>{carouselItem.label}</div>
    </li>
  );
}

export default React.memo(PageCarouselItem);
