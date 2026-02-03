// import { useEffect, useState } from "react";
// import { ChevronLeft, ChevronRight } from "@untitledui/icons";

// import doctor1 from "../../assets/images/doctor.jpg";
// import doctor2 from "../../assets/images/doctor2.jpg";
// import doctor3 from "../../assets/images/doctor3.jpg";

// const images = [doctor1, doctor2, doctor3];

// const IntroductionCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? images.length - 1 : prev - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === images.length - 1 ? 0 : prev + 1
//     );
//   };

//   // Auto slide
//   useEffect(() => {
//     const interval = setInterval(nextSlide, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="absolute inset-0 overflow-hidden">
//       {/* Slides */}
//       <div
//         className="flex h-full transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
// "
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {images.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             alt="Clinic"
//             className="w-full h-full object-cover object-top shrink-0"
//           />
//         ))}
//       </div>

//       {/* Dark overlay for readability */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />

//       {/* Controls */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-6 -translate-y-1/2 z-20 bg-white/90 hover:bg-white backdrop-blur p-2 rounded-full shadow hidden sm:flex cursor-pointer hover:scale-[125%]"
//       >
//         <ChevronLeft className="w-5 h-5 text-gray-700" />
//       </button>

//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-6 -translate-y-1/2 z-20 bg-white/90 hover:bg-white backdrop-blur p-2 rounded-full shadow hidden sm:flex cursor-pointer hover:scale-[125%]"
//       >
//         <ChevronRight className="w-5 h-5 text-gray-700" />
//       </button>

//       {/* Indicators */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20 cursor-pointer">
//         {images.map((_, index) => (
//           <span
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full cursor-pointer ${
//               currentIndex === index
//                 ? "bg-blue-300"
//                 : "bg-white/70"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default IntroductionCarousel;


// import { useEffect, useState } from "react";
// import { ChevronLeft, ChevronRight } from "@untitledui/icons";

// const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// const IntroductionCarousel = () => {
//   const [images, setImages] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? images.length - 1 : prev - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === images.length - 1 ? 0 : prev + 1
//     );
//   };

//   useEffect(() => {
//     fetch(`${BASE_URL}/api/carousel`)
//       .then((res) => res.json())
//       .then((data) => setImages(data))
//       .catch((err) => console.error("Carousel fetch error:", err));
//   }, []);

//   useEffect(() => {
//     if (!images.length) return;
//     const interval = setInterval(nextSlide, 5000);
//     return () => clearInterval(interval);
//   }, [images]);

//   if (!images.length) return null;

//   return (
//     <div className="absolute inset-0 overflow-hidden">
//       {/* Slides */}
//       <div
//         className="flex h-full transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {images.map((item) => (
//           <img
//             key={item._id}
//             src={item.image}
//             alt="Clinic"
//             className="w-full h-full object-cover object-top shrink-0"
//           />
//         ))}
//       </div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />

//       {/* Controls */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-6 -translate-y-1/2 z-20 bg-white/90 hover:bg-white backdrop-blur p-2 rounded-full shadow hidden sm:flex"
//       >
//         <ChevronLeft className="w-5 h-5 text-gray-700" />
//       </button>

//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-6 -translate-y-1/2 z-20 bg-white/90 hover:bg-white backdrop-blur p-2 rounded-full shadow hidden sm:flex"
//       >
//         <ChevronRight className="w-5 h-5 text-gray-700" />
//       </button>

//       {/* Indicators */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//         {images.map((_, index) => (
//           <span
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full ${
//               currentIndex === index
//                 ? "bg-blue-300"
//                 : "bg-white/70"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default IntroductionCarousel;

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "@untitledui/icons";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const IntroductionCarousel = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Swipe refs
  const startX = useRef(null);
  const endX = useRef(null);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  // Fetch carousel images
  useEffect(() => {
    fetch(`${BASE_URL}/api/carousel`)
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) =>
        console.error("Carousel fetch error:", err)
      );
  }, []);

  // Autoplay (pause on hover)
  useEffect(() => {
    if (!images.length || isHovered) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [images, isHovered]);

  // Swipe handlers
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!startX.current || !endX.current) return;

    const diff = startX.current - endX.current;

    if (diff > 50) nextSlide();   // swipe left
    if (diff < -50) prevSlide();  // swipe right

    startX.current = null;
    endX.current = null;
  };

  if (!images.length) return null;

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((item) => (
          <img
            key={item._id}
            src={item.image}   
            alt="Clinic"
            className="w-full h-full object-cover object-top shrink-0"
            draggable={false}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 -translate-y-1/2 z-20 bg-white/90 hover:bg-white backdrop-blur p-2 rounded-full shadow hidden sm:flex"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 -translate-y-1/2 z-20 bg-white/90 hover:bg-white backdrop-blur p-2 rounded-full shadow hidden sm:flex"
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              currentIndex === index
                ? "bg-blue-300"
                : "bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default IntroductionCarousel;
