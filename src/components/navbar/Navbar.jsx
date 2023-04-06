import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
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
            <a href="/">LogIn</a>
          </li>
          <li>
            <a href="/">SignUp</a>
          </li>
          <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
            {nav ? <AiOutlineClose size={25} className={styles.icon} /> : ""}
          </div>
        </ul>
      </nav>
      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? " " : <AiOutlineMenu size={25} />}
      </div>
    </header>
  );
};

export default Navbar;
