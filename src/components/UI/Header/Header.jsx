import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import cl from './Header.module.css'
import "swiper/css";


const Header = ({categories, selectedCat, onChangeCat}) => {

  

  return (
    <header className={cl.header}>
      <Swiper 
      className={cl.catSwiper}
      spaceBetween={50}
      slidesPerView={1}
      direction='horizontal'
      loop = {true}
      onSlideChange={(swiper) => {
        const index = swiper.realIndex
        const cat = categories[index]
        if (cat) {
          onChangeCat(cat.id)
        }
      }}
      >
          {categories.map(cat => (
            <SwiperSlide key={cat.id} className={cl.cat__btn}>{cat.label}</SwiperSlide>
          ))}
      </Swiper>
    </header>
  )
}

export default Header