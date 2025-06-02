import React, { useState, useEffect } from "react";
import kedarnath2 from "../../assets/Images/Kedarnath2.jpg";
import Chardham1 from "../../assets/Images/Chardham1.jpg";
import { Link } from "react-router-dom";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [Chardham1, kedarnath2];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const caption = {
    title: "Char Dham",
    description:
      "Experience the divine blessings of Lord Vishnu in the Himalayas.",
  };

  return (
    <div className="relative w-full h-[50vh] sm:h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full h-full relative">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] object-cover"
            />

            {index === 0 && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                <h2
                  className="text-3xl sm:text-5xl font-bold mb-2"
                  style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
                >
                  {caption.title}
                </h2>
                <p
                  className="text-lg sm:text-xl mb-6"
                  style={{ textShadow: "1px 1px 6px rgba(0,0,0,0.6)" }}
                >
                  {caption.description}
                </p>
                <div className="space-x-4">
                  <Link to="/vision">
                    <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-700 transition shadow-lg">
                      Our Vision
                    </button>
                  </Link>
                  <Link to="/donationForm">
                    <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-800 transition shadow-lg">
                      Donate for Pilgrimage
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition"
      >
        ❯
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-5 w-full flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
