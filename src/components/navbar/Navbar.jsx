import React, { useState } from "react";
import styles from "./Navbar.module.css";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import Logo from "../../img/logo.jpg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className={styles.navbar}>
      <img src={Logo} alt="/" />
      <nav>
        <ul
          className={
            nav ? [styles.menu, styles.active].join(" ") : [styles.menu]
          }
        >
          <li>
            <a href="/">Learn More</a>
          </li>
          <li>
            <a href="/">LogIn</a>
          </li>
          <li>
            <a href="/">SignUp</a>
          </li>
          <li>
            <AiOutlineSearch sizs={25} style={{ marginTop: "6px" }} />
          </li>
          <li>
            <AiOutlineUser sizs={25} style={{ marginTop: "6px" }} />
          </li>
        </ul>
      </nav>
      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
    </header>
  );
};

export default Navbar;
