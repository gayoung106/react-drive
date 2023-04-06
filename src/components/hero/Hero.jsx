import React from "react";
import styles from "./Hero.module.css";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = ({ searchQuery, setSearchQuery }) => {
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className={styles.hero}>
      <form onSubmit={handleSearchSubmit}>
        <div className={styles.text}>
          <label>Name</label>
          <input
            className={styles.input_text}
            type="text"
            placeholder="Search Friends"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>

        <div className={styles.search_btn}>
          <AiOutlineSearch className={styles.icon} />
          <button className={styles.btn}>검색</button>
        </div>
      </form>
    </div>
  );
};

export default Hero;
