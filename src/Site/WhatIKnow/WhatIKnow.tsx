import React from "react";
import CategoryItem from "./CategoryItem/CategoryItem";
import categories from "./Data";
import styles from "./WhatIKnow.module.css";

function WhatIKnow(): JSX.Element {
  return (
    <div className={styles.list} id="what-i-know">
      {categories.map((category, index) => (
        <CategoryItem key={index} category={category} />
      ))}
    </div>
  );
}

export default WhatIKnow;
