import React from 'react';
import './movieSwiper.css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, EffectCoverflow } from 'swiper/modules';
function MovieSwiper({ slides, slideChange }) {
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
            modules={[EffectCoverflow, Autoplay]}
            className="movieSwiper"
        >
            {
            slides.map(slide=> (
                <SwiperSlide key={slide._id}>
                        <img src={slide.previewImg} alt="Preview Image" 
                        onClick={() => slideChange(slide._id)}/>
                        
                </SwiperSlide>  
            ))
            }
            
        </Swiper>
    );
};

export default MovieSwiper;

