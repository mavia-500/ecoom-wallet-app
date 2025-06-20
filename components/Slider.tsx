"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay"; // If you're using autoplay
import "swiper/css/pagination"; // If you're using pagination
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
  }
  const productData: product[] = [
    {
      title: "handmade laxrious wallet ",
      imageUrl: "imageurl",
      price: 30,
      color: "blue",
    },
    {
      title: "life time with laxrious ",
      imageUrl: "imageurl",
      price: 300,
      color: "green",
    },
    {
      title: "best wallet ",
      imageUrl: "imageurl",
      price: 305,
      color: "red",
    },
    {
      title: " laxrious wallet ",
      imageUrl: "imageurl",
      price: 304,
      color: "gray",
    },
  ];
  return (
    <div>
      <Swiper
        spaceBetween={30} // Space between slides
        centeredSlides={true} // Center active slide
        autoplay={{
          delay: 3500, // Delay between slides in ms
          disableOnInteraction: false, // Continue autoplay even after user interaction
        }}
        pagination={{
          clickable: true, // Make pagination dots clickable
        }}
        navigation={true} // Enable navigation arrows
        loop={true} // Enable infinite loop
        modules={[Autoplay, Pagination, Navigation]} // Register modules
        className="mySwiper" // Optional: for custom CSS if needed
        breakpoints={{
          // Responsive breakpoints
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2, // Show 2 slides on tablets
          },
          1024: {
            slidesPerView: 3, // Show 3 slides on larger desktops
          },
        }}
      >
        {productData.map(({ title, imageUrl }) => (
          <SwiperSlide key={title}>
            <div
              className="bg-cover bg-center h-64 flex items-end justify-center text-center p-4"
              style={{ backgroundImage: `url('${imageUrl}')` }}
              key={title}
            >
              <div className="flex flex-col items-center">
                <h3>{title}</h3>
                <Link href={"/bifoldwallet"}>
                  <button className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-lg mt-5">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <LeatherWallet productData={productData}/>
      <Collections/>
    </div>
  );
};

export default Slider;
