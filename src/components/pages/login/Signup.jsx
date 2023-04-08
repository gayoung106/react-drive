import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

import styles from "./Login.module.css";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <h1>SIGN UP</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.input_wrap}>
            <label>EMAIL</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              type="email"
              placeholder=""
            />
          </div>
          <div className={styles.input_wrap}>
            <label>PASSWORD</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              type="password"
              placeholder=""
            />
          </div>

          <button className={styles.button}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};
export default Signup;
