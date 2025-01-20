import React, { useEffect, useState } from 'react'
import img from '../../assets/sch.jpg'
import img1 from '../../assets/sc.jpg'
import img2 from '../../assets/scho.jpg'
import img3 from '../../assets/school.jpg'
import img4 from '../../assets/school1.jpg'
import { Link } from 'react-router-dom'
function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);
  // بيانات الشرائح (Slides)
  const slides = [
    {
      id: 1,
      image: img4,
      title: "All About The University",
      description: "Discover everything about our prestigious university.",
    },
    {
      id: 2,
      image: img1,
      title: "Why You Should Study With Us",
      description: "Learn why we are the best choice for your education.",
    },
    {
      id: 3,
      image: img2,
      title: "Education And Student Experience",
      description: "Explore our unique educational approach and student life.",
    },
    {
      id: 4,
      image: img3,
      title: "Alumni And Its Donors",
      description: "Meet our successful alumni and generous donors.",
    },
    {
      id: 5,
      image: img,
      title: "Latest University News & Events",
      description: "Stay updated with the latest news and events.",
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
  return (<>
    <div className="relative mt-16 h-[600px] overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute w-full h-full transition-opacity duration-1000 ${
                  index === activeSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-fill"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-8">
                  <h2 className="text-2xl font-bold">{slide.title}</h2>
                  <p className="mt-2">{slide.description}</p>
                  <Link to="about" className="mt-4 inline-block bg-[#55ABDA] px-4 py-2 rounded-lg hover:bg-[#3B8DBF] transition-colors">
                    Continue Reading &raquo;
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="container mx-auto flex justify-center space-x-4 my-4">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full ${
                index === activeSlide ? 'bg-[#55ABDA]' : 'bg-gray-400'
              } hover:bg-[#3B8DBF] transition-colors`}
            ></button>
          ))}
        </div></>
  )
}

export default Slider