"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import LeatherWallet from "./LeatherWallet";
import Collections from "./Collections";

const Slider = () => {
  interface product {
    title: string;
    imageUrl: string;
    price: number;
    color: string;
    category: string;
    link:string
  }
  const productData: product[] = [
    {
      title: "handmade laxrious wallet ",
      imageUrl: "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928466/Gemini_Generated_Image_l82ljxl82ljxl82l_ivbhs8.webp",
      price: 2400,
      color: "blue",
      category: "longwallet",
      link:'/longwallet'
    },
    {
      title: "life time with laxrious ",
      imageUrl: "/images/bf3.webp",
      price: 2900,
      color: "green",
      category: "bifoldwallet",
       link:'/bifoldwallet'
    },
    {
      title: "best wallet ",
      imageUrl: "/images/Gemini_Generated_Image_3g4hf3g4hf3g4hf3.webp",
      price: 2500,
      color: "red",
      category: "trifoldwallet",
      link:'/trifoldwallet'
    },
    {
      title: " laxrious wallet ",
      imageUrl: "/images/4.webp",
      price: 1800,
      color: "gray",
      category: "cardholder",
      link:'/cardholder'
    },
  ];
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet mt-8",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full"
        slidesPerView={1}
      >
        {productData.map(({ title, imageUrl, category }) => (
          <SwiperSlide key={title} className="mt-5">
            <div className="relative w-full h-[50vh] sm:h-[50vh] md:h-[50vh] lg:h-[50vh] flex items-end justify-center text-center p-4 text-white">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-80 object-contain"
              />
              <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center px-4">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                  {title}
                </h3>
                <Link href={`/${category}`}>
                  <button className="bg-indigo-600 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-lg mt-2 sm:mt-4 text-sm sm:text-base">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <LeatherWallet productData={productData} />
      <Collections />
      
    </div>
  );
};

export default Slider;
