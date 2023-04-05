import React from "react";
import styles from "./Footer.module.css";
import Logo from "../../img/logo_dark.jpg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <img src={Logo} alt="/" />
        <button>Share a friend</button>
      </div>
    </div>
  );
};

export default Footer;
