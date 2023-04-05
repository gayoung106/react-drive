import React from "react";
import styles from "./Find.module.css";

const Card = ({ src, name }) => {
  return (
    <div className={styles.card}>
      <img src={src} alt="/" />
      <p>{name}</p>
    </div>
  );
};

export default Card;
