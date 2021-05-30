import React from "react";
import styles from "./Card.module.css";

interface IProps {
  title: string;
  subTitle?: string;
}

function CardTitles({ title, subTitle }: IProps): JSX.Element {
  return (
    <div className={styles.card_titles}>
      <h2>{title}</h2>
      {subTitle && <h3>{subTitle}</h3>}
    </div>
  );
}

export default CardTitles;
