import React from "react";
import { Category } from "../types";
import TechList from "./TechList";
import styles from "./CategoryItem.module.css";
import Card from "../../../Components/Containers/Card/Card";
import CardHeader from "../../../Components/Containers/Card/CardHeader";

interface IProps {
  category: Category;
}

function CategoryItem({ category }: IProps): JSX.Element {
  // const { width } = useWindowDim();
  // let cardWidth = 400;

  // if (width <= 930) {
  //   cardWidth = 300;
  // } else if (width <= 1060) {
  //   cardWidth = 350;
  // } else if (width <= 1200) {
  //   cardWidth = 400;
  // } else if (width <= 1310) {
  //   cardWidth = 450;
  // } else if (width <= 1390) {
  //   cardWidth = 500;
  // } else if (width <= 1600) {
  //   cardWidth = 350;
  // }

  return (
    <div>
      <Card className={styles.category_name}>
        <CardHeader>{category.name}</CardHeader>
      </Card>
      <TechList technologies={category.technologies} />
    </div>
  );
}

export default CategoryItem;
