// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { getBlogById } from "../services/blogService";

// const singleBlogPage = () => {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getBlogById(id)
//       .then((res) => {
//         console.log("Blog fetched:", res.data);
//         setBlog(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Failed to fetch blog", err);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) return <p className="text-center mt-10">Loading...</p>;
//   if (!blog) return <p className="text-center mt-10">Blog not found</p>;

//   return (
//     <div className="max-w-4xl mx-auto py-10 px-4">
//       <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
//       <p className="text-gray-500 mb-6">
//         {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : ""} 
//       </p>
//       <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover mb-6" />
//       <p className="text-gray-700">{blog.description}</p>
//     </div>
//   );
// };

// export default singleBlogPage;
// / {blog.comments?.length || 0} Comments

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBlogById } from "../services/blogService";

const SingleBlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogById(id)
      .then((res) => {
        const blogData = res.data;

        // Fix image URL for production
        const imageUrl = blogData.image?.startsWith("http")
          ? blogData.image.replace("http://localhost:5000", import.meta.env.VITE_API_BASE_URL)
          : `${import.meta.env.VITE_API_BASE_URL}/${blogData.image}`;

        setBlog({ ...blogData, image: imageUrl });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch blog", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!blog) return <p className="text-center mt-10">Blog not found</p>;

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 mb-2">
        {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : ""} /{" "}
        {blog.comments?.length || 0} Comments
      </p>

      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-96 object-cover mb-6 rounded-lg"
      />
      <p className="text-gray-700">{blog.description}</p>
    </div>
  );
};

export default SingleBlogPage;
