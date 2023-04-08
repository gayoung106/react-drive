import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../../img/logo.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  //console.log(user.email);
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className={styles.navbar}>
      <img src={Logo} alt="/" />
      <nav>
        <ul
          className={
            nav ? [styles.menu, styles.active].join(" ") : [styles.menu]
          }
        >
          {user?.email ? (
            <div>
              <button className={styles.button} onClick={handleLogout}>
                logout
              </button>
            </div>
          ) : (
            <>
              <li>
                <Link to="/login">LogIn</Link>
              </li>
              <li>
                <Link to="/signup">SignUp</Link>
              </li>
            </>
          )}
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
