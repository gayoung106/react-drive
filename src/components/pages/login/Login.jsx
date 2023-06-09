import React, { useState } from "react";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <h1>LOG IN</h1>
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
          {error && <p>Please check your email address or password.</p>}
          <button className={styles.button}>Sign in</button>
          <p className={styles.signup}>
            <span>Not a member?</span>
            <Link to="/signup">Sign up now</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
