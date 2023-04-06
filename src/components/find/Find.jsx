import React, { useState } from "react";
import styles from "./Find.module.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Card from "./Card";
import Hero from "../hero/Hero";

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
  { src: kuromi, name: "KUROMI/쿠로미" },
  { src: mymelody, name: "MY MELODY/마이멜로디" },
  { src: pochaco, name: "POCHACO/포차코" },
  { src: pompom, name: "POMPOM PURIN/폼폼푸린" },
  { src: cinamoroll, name: "CINAMOROLL/시나모롤" },
  { src: gudetama, name: "GUDETAME/구데타마" },
  { src: kitty, name: "HELLO KITTY/헬로키티" },
  { src: kerokerokeropi, name: "KEROKERO KERORI/케로케로케로리" },
  { src: littletwinstars, name: "LITTLE TWIN STARS/리틀트윈스타" },
  { src: dingguridays, name: "DINGGURI DAYS/딩구리데이즈" },
];

const Find = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className={styles.find}>
        <div className={styles.heading}>
          <h1>Find your friends</h1>
          <div className={styles.text_bg}>
            <p>
              {" "}
              This is
              <span> GAZERO </span>
              world
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
            {cards
              .filter((card) =>
                card.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((card, index) => (
                <SwiperSlide key={index}>
                  <Card src={card.src} name={card.name} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Find;
