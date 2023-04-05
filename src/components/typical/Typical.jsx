import React from "react";
import styles from "./Typical.module.css";
import Character from "../../img/sanrio.png";

const Typical = () => {
  return (
    <div className={styles.character}>
      <div className={styles.left}>
        <img src={Character} alt="/" />
      </div>
      <div className={styles.info}>
        <h2>
          Find your<span> perfect GAZERO friends</span>
        </h2>
        <p>GAZERO will always be by your side and be your perfect friend.</p>
        <button>GAZERO</button>
      </div>
    </div>
  );
};

export default Typical;
