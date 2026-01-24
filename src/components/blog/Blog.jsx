// import img1 from "../../assets/images/blog/blog-1.jpg";
// import img2 from "../../assets/images/blog/blog-2.jpg";
// import img3 from "../../assets/images/blog/blog-3.jpg";
// import img4 from "../../assets/images/blog/blog-4.jpg";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import MonoBlog from "./MonoBlog";
// import "swiper/css";
// import "swiper/css/pagination";
// import "./blog.css";

// // Breakpoints for swiperJS
// const custom_breakpoints = {
//   640: {
//     slidesPerView: 2,
//     spaceBetween: 15,
//   },
//   768: {
//     slidesPerView: 3,
//     spaceBetween: 15,
//   },
//   1220: {
//     slidesPerView: 4,
//     spaceBetween: 24,
//   },
// };

// const blogData = [
//   {
//     id: 1,
//     image: img1,
//     date: "22 Oct, 2020",
//     comments: 246,
//     title: "Top 5 Tips for Maintaining Your Hearing Aid",
//     link: "#!",
//   },
//   {
//     id: 2,
//     image: img2,
//     date: "22 Oct, 2020",
//     comments: 246,
//     title: "TUnderstanding Hearing Loss: Causes and Treatments",
//     link: "#!",
//   },
//   {
//     id: 3,
//     image: img3,
//     date: "22 Oct, 2020",
//     comments: 246,
//     title: "Fun Speech Exercises for Children at Home",
//     link: "#!",
//   },
//   {
//     id: 4,
//     image: img4,
//     date: "22 Oct, 2020",
//     comments: 246,
//     title: "The Role of Audiologists in Your Hearing Health",
//     link: "#!",
//   },
//   {
//     id: 5,
//     image: img2,
//     date: "22 Oct, 2020",
//     comments: 246,
//     title: "Choosing the Right Hearing Aid for Your Lifestyle",
//     link: "#!",
//   },
//   {
//     id: 6,
//     image: img1,
//     date: "22 Oct, 2020",
//     comments: 246,
//     title: "How Regular Checkups Improve Speech Therapy Outcomes",
//     link: "#!",
//   },
// ];

// const Blog = () => {
//   return (
//     <div className="content py-25 px-2 relative" id="blog">
//       <div className="max-w-135 text-center mx-auto pb-17.5">
//         <p className="section-title pb-6">Blog</p>
//         <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
//           Stay updated with the latest tips, guides, and insights on hearing health, speech therapy, and living confidently with hearing aids.
//         </p>
//       </div>
//       <Swiper
//         grabCursor={true}
//         breakpoints={custom_breakpoints}
//         pagination={{ clickable: true }}
//         modules={[Pagination]}
//       >
//         {blogData?.map((data, index) => (
//           <SwiperSlide
//             key={index}
//             className="mb-10" /* pagination margin bottom to 40px */
//             style={{ backgroundColor: "rgba(0,0,0,0)" }}
//           >
//             <MonoBlog data={data} key={index} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Blog;




import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import { getBlogs } from "../../services/blogService";

import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

// Swiper breakpoints
const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogs()
      .then((res) => {
        console.log("API RESPONSE:",res);
        console.log("BLOG DATA", res.data);
        setBlogs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch blogs", err);
        setLoading(false);
      });
  }, []);

  return (
  <div className="content py-25 px-2 relative" id="blog">
    <div className="max-w-135 text-center mx-auto pb-17.5">
      <p className="section-title pb-6">Blog</p>
      <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
        Stay updated with the latest tips, guides, and insights on hearing health,
        speech therapy, and living confidently with hearing aids.
      </p>
    </div>

    {loading ? (
      <p className="text-center">Loading blogs...</p>
    ) : blogs.length > 0 ? (
      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog._id} className="mb-10">
            <MonoBlog data={blog} />
          </SwiperSlide>
        ))}
      </Swiper>
    ) : (
      <p className="text-center text-gray-400">No blogs available</p>
    )}
  </div>
);
}

export default Blog;

