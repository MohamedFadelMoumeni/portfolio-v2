import React from "react";
import Container from "./container.component";
import Carouselcard from "./ui/carousel-card.component";
import { Navigation, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  return (
    <div className="w-full py-10 md:py-20 " id="testimonials">
      <Container>
        <h1 className="text-5xl text-black font-bold mb-10 text-center">
          What People Say
        </h1>
        <div className="w-full p-2 ">
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={(e) => console.log(e)}
            navigation={{
              prevEl: ".prev_button",
              nextEl: ".next_button",
            }}
          >
            <SwiperSlide>
              <Carouselcard />
            </SwiperSlide>
            <SwiperSlide>
              <Carouselcard />
            </SwiperSlide>
            <SwiperSlide>
              <Carouselcard />
            </SwiperSlide>
            <SwiperSlide>
              <Carouselcard />
            </SwiperSlide>
          </Swiper>
          <div className="w-full mt-6 flex items-center justify-center space-x-4">
            <a className="prev_button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            </a>
            <a className="next_button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
