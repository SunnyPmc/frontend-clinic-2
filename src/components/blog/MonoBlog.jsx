import { Link } from "react-router-dom";

const MonoBlog = ({ data }) => {
  const formattedDate = data?.createdAt
    ? new Date(data.createdAt).toLocaleDateString()
    : "";

  // const imageUrl = data?.image?.startsWith("http")
  //   ? data.image.replace(
  //       "http://localhost:5000",
  //       import.meta.env.VITE_API_BASE_URL
  //     )
  //   : `${import.meta.env.VITE_API_BASE_URL}${data?.image}`;
 const imageUrl = data.image
  ? `${import.meta.env.VITE_API_BASE_URL}/${data.image}`
  : "";

  
  return (
    <div className="overflow-hidden rounded-lg border border-gray-100 hover:shadow-2xl bg-white shadow-gray-300 transition-all duration-300">
      <Link to={`/blogs/${data?._id}`}>
        <img
          src={imageUrl}
          // src={`http://localhost:5000${data.image}`}
          alt={data?.title}
          className="w-full h-56.5 object-cover"
        />

        <div className="m-6">
          <p className="text-[10px] xs:text-[14px] font-normal text-gray-400">
            {formattedDate}
          </p>

          <p className="text-[14px] xs:text-lg font-medium text-[#333333]">
            {data?.title?.length > 40
              ? `${data.title.slice(0, 40)}...`
              : data?.title}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MonoBlog;
