import React, { useCallback, useState } from "react";
import PageCarouselItem from "./PageCarouselItem";
import { CarouselItem, SelectedDims } from "./types";
import styles from "./PageCarousel.module.css";
import { SelectedItem } from "../../../Site/types";

interface IProps {
  carouselItems: CarouselItem[];
  selectedItem: SelectedItem;
}

function PageCarousel({ carouselItems, selectedItem }: IProps): JSX.Element {
  const [selectedDims, setSelectedDims] = useState<SelectedDims>();

  const indicatorStyle = {
    width: selectedDims?.width,
    left: selectedDims?.offset,
  };

  const selectDims = useCallback((dims: SelectedDims) => {
    setSelectedDims(dims);
  }, []);

  return (
    <nav className={styles.page_carousel}>
      <div className={styles.carousel_wrapper}>
        <ul className={styles.list}>
          {carouselItems.map((carouselItem) => (
            <PageCarouselItem
              key={carouselItem.elementId}
              carouselItem={carouselItem}
              selectedItem={selectedItem}
              selectDims={selectDims}
            />
          ))}
        </ul>
        <div style={indicatorStyle} className={styles.indicator} />
      </div>
    </nav>
  );
}

export default React.memo(PageCarousel);
