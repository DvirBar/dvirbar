import React from "react";
import CategoryItem from "./CategoryItem/CategoryItem";
import categories from "./Data";
import Languages from "./Languages/Languages";
import styles from "./WhatIKnow.module.css";

function WhatIKnow(): JSX.Element {
  return (
    <div className={styles.container} id="what-i-know">
      <Languages />
      <div className={styles.list}>
        {categories.map((category, index) => (
          <CategoryItem key={index} category={category} />
        ))}
      </div>
    </div>
  );
}

export default WhatIKnow;
