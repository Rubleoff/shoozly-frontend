import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import cl from './Header.module.css'
import "swiper/css";


const Header = (props) => {
  return (
    <header className={cl.header}>
      <Swiper 
      className={cl.catSwiper}
      spaceBetween={50}
      slidesPerView={1}
      direction='horizontal'
      loop = {true}
      onSlideChange={props.slider}
      >
          <SwiperSlide className={cl.cat__btn}>Subscriptions</SwiperSlide>
          <SwiperSlide className={cl.cat__btn}>In-game currency</SwiperSlide>
          <SwiperSlide className={cl.cat__btn}>VPN</SwiperSlide>
      </Swiper>
    </header>
  )
}

export default Header