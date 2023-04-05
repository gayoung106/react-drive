import React from "react";
import styles from "./Signiture.module.css";
import kuromi from "../../img/2kuromi.png";
import mymelody from "../../img/2mymelody.png";
import pochaco from "../../img/2pochaco.png";
import pompom from "../../img/2pompom.png";
import cinamoroll from "../../img/2cinamoroll.png";
import gudetama from "../../img/2gugetama.png";
import kitty from "../../img/2hellokitty.png";
import kerokerokeropi from "../../img/2kerokerokeropi.png";
import littletwinstars from "../../img/2littletwinstars.png";

const signitures = [
  { src: kuromi, name: "KUROMI" },
  { src: mymelody, name: "MY MELODY" },
  { src: pochaco, name: "POCHACO" },
  { src: pompom, name: "POMPOM PURIN" },
  { src: cinamoroll, name: "CINAMOROLL" },
  { src: gudetama, name: "GUDETAME" },
  { src: kitty, name: "HELLO KITTY" },
  { src: kerokerokeropi, name: "KEROKERO KERORI" },
  { src: littletwinstars, name: "LITTLE TWIN STARS" },
];

const Signiture = () => {
  return (
    <div className={styles.signiture}>
      <div className={styles.heading}>
        <h2>Signiture GAZERO</h2>
        <div className={styles.text_bg}>
          <p>
            <span>Select your friends.</span>
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          {signitures.map((signiture, index) => (
            <div key={index}>
              <img src={signiture.src} alt="/" />
              <div className={styles.content}>
                <h3>{signiture.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Signiture;
