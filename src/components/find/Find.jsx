import React from "react";
import styles from "./Find.module.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Card from "./Card";

import kuromi from "../../img/kuromi.png";
import mymelody from "../../img/mymelody.png";
import pochaco from "../../img/pochaco.png";
import pompom from "../../img/pompom.png";
import cinamoroll from "../../img/sinamoroll.png";
import gudetama from "../../img/gudetama.png";
import kitty from "../../img/kitty.png";
import kerokerokeropi from "../../img/kerokerokeropi.png";
import littletwinstars from "../../img/littletwinstars.png";
import dingguridays from "../../img/dingguridays.png";

const cards = [
  { src: kuromi, name: "KUROMI" },
  { src: mymelody, name: "MY MELODY" },
  { src: pochaco, name: "POCHACO" },
  { src: pompom, name: "POMPOM PURIN" },
  { src: cinamoroll, name: "CINAMOROLL" },
  { src: gudetama, name: "GUDETAME" },
  { src: kitty, name: "HELLO KITTY" },
  { src: kerokerokeropi, name: "KEROKERO KERORI" },
  { src: littletwinstars, name: "LITTLE TWIN STARS" },
  { src: dingguridays, name: "DINGGURI DAYS" },
];

const Find = () => {
  return (
    <div className={styles.find}>
      <div className={styles.heading}>
        <h1>Find your friends</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Explore the world's largest character place</span>
          </p>
        </div>
      </div>
      <div className={styles.slider}>
        <Swiper
          className={styles.swiper}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          centeredSlides={false}
          navigation
          breakpoints={{
            340: {
              width: 340,
              slidesPerView: 1,
              centeredSlides: true,
            },
            768: {
              width: 768,
              slidesPerView: 4,
              centeredSlides: false,
            },
            1040: {
              width: 1040,
              slidesPerView: 5,
              centeredSlides: false,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <Card src={card.src} name={card.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Find;
