import React from "react";
import { Category } from "../types";
import TechList from "./TechList";
import CategoryCard from "../CategoryCard/CategoryCard";

interface IProps {
  category: Category;
}

function CategoryItem({ category }: IProps): JSX.Element {
  return (
    <CategoryCard category={category}>
      <TechList technologies={category.technologies} />
    </CategoryCard>
  );
}

export default CategoryItem;
