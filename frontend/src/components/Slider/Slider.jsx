import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);

  // بيانات الشرائح (Slides)
  const slides = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331793/school-system/assets/IMG_6498-scaled_1_du4jfy.jpg",
      title: "All About The University",
      description: "Discover everything about our prestigious university.",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331963/school-system/assets/20211128_113835-scaled_gsuud0.jpg",
      title: "Why You Should Study With Us",
      description: "Learn why we are the best choice for your education.",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331838/school-system/assets/IMG_7223-scaled_f2oopy.jpg",
      title: "Education And Student Experience",
      description: "Explore our unique educational approach and student life.",
    },
  ];

  // تغيير الشرائح تلقائيًا
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // تغيير الشريحة يدويًا
  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <>
      {/* Slider Container */}
      <div className="relative mt-16 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      <AnimatePresence>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* الصورة */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay مع النص */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center p-4 sm:p-8">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-lg md:text-xl mb-6">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
        </AnimatePresence>
      </div>
      {/* نقاط التحكم (Dots) */}
      <div className="container mx-auto flex justify-center space-x-2 sm:space-x-4 my-4">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
              index === activeSlide ? "bg-[#55ABDA]" : "bg-gray-400"
            } hover:bg-[#3B8DBF] transition-colors`}
          ></button>
        ))}
      </div>
    </>
  );
}

export default Slider;