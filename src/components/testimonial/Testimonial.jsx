// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { EffectFade, Navigation, Pagination } from "swiper/modules";
// import TestimonialTemplate from "./TestimonialTemplate";
// import "./testimonial.css";

// const testimonialData = [
//   {
//     message:
//       "Visiting this clinic was a life-changing experience. The team’s professionalism and personalized care made me feel comfortable and confident throughout my treatment.",
//     quote: `From the initial hearing assessment to fitting my hearing aid, every step was handled with expertise and attention to detail. I can now enjoy conversations with my family without any difficulties. Highly recommended!`,
//     name: "Ramesh Thapa",
//     designation: "Patient",
//   },
//   {
//     message:
//       "My child was struggling with speech delays, and I wasn’t sure where to start. The therapists at this clinic made the entire process approachable and engaging.",
//     quote: `The therapy sessions were tailored to my child’s needs, and progress was noticeable within weeks. The team’s dedication and expertise are truly commendable.`,
//     name: "Anita Shretha",
//     designation: "Parent",
//   },
//   {
//     message:
//       "I was hesitant about getting a hearing aid, but the clinic’s audiologists explained everything clearly and made me feel confident in my choices.",
//     quote: `The fitting process was seamless, and the follow-up care was exceptional. I now have a device that works perfectly, and my hearing has improved tremendously.`,
//     name: "Sujan Gurung",
//     designation: "Patient",
//   },
// ];

// const Testimonial = () => {
//   return (
//     <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
//       <div className="w-full h-full cursor-grab">
//         <p className="section-title mb-6 text-center">Testimonial</p>
//         <Swiper
//           id="testimonialSwiper"
//           spaceBetween={30}
//           navigation={false}
//           pagination={{
//             clickable: true,
//           }}
//           modules={[EffectFade, Navigation, Pagination]}
//         >
//           {testimonialData.map((testimonial, index) => (
//             <SwiperSlide key={index}>
//               <TestimonialTemplate testimonial={testimonial} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;



import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/testimonials");
        console.log(res.data);
        const data = await res.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Failed to load testimonials", error);
      }
    };

    fetchTestimonials();
  }, []);

  if (!testimonials.length) return null;

  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Testimonial</p>

        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial._id}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
