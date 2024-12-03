"use client"
import Image from "next/image"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export const Gallery = () => {
  return (
    <div className="bg-blue-100 sm:px-12 py-12 px-3 relative">

      {/* Absolute background overlay */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={"/bg1.png"}
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
          alt="image"
        />
      </div>

      <div className="text-center">
        <p>
          Make Your Trip More Pleasurable
        </p>
        <h2 className="font-bold text-2xl">
          RECENT GALLERY
        </h2>
      </div>

      <div className="mt-8">
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
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/travel4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/travel7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/travel1.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}