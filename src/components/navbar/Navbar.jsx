import React from "react";
import styles from "./Navbar.module.css";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import Logo from "../../img/logo.png";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <img src={Logo} alt="/" />
      <nav>
        <ul className={styles.menu}>
          <li>
            <a href="/">Learn More</a>
          </li>
          <li>
            <a href="/">로그인</a>
          </li>
          <li>
            <a href="/">회원가입</a>
          </li>
          <li>
            <AiOutlineSearch sizs={25} style={{ marginTop: "6px" }} />
          </li>
          <li>
            <AiOutlineUser sizs={25} style={{ marginTop: "6px" }} />
          </li>
        </ul>
      </nav>
      <div className={styles.mobile_btn}>
        <AiOutlineMenu size={25} />
      </div>
    </header>
  );
};

export default Navbar;
