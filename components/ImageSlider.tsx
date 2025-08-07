import React, { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";


interface ImageSliderProps {
    images: string[];
  }
const ImageSlider = ({ images}:ImageSliderProps) => {
  // console.log(rendering);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleThumbnailClick = (index:number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
      {/* Main Image */}
      <div className="relative w-full aspect-[4/3] mb-4">
        <img
          src={images[currentIndex]}
          alt="loading"
          className={`w-full object-contain rounded-lg`}
        />
        {/* Navigation Buttons */}

      

      {/* Thumbnail Slider */}
      
        <div className="flex space-x-2 overflow-x-auto w-full p-2">
          {images.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Thumbnail ${index + 1}`}
              className={`w-20 h-20 object-contain rounded cursor-pointer transition-all ${
                currentIndex === index
                  ? "border-2 border-blue-500 opacity-100"
                  : "opacity-60 hover:opacity-80"
              }`}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageSlider;
