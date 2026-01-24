// const MonoBlog = ({ data }) => {
//   return (
//     <div className="overflow-hidden rounded-lg border border-gray-100 hover:shadow-2xl bg-white shadow-gray-300 transition-all duration-300">
//       <a href={data?.link}>
//         <img
//           src={data?.image}
//           alt="Blog"
//           className="w-full h-56.5 object-cover "
//         />
//         <div className="m-6">
//           <p className="text-[10px] xs:text-[14px] font-normal text-gray-400 ">
//             {data?.date} / {data?.comments} Comments
//           </p>
//           <p className="text-[14px] xs:text-lg font-medium text-[#333333]">
//             {data?.title.length > 40
//               ? `${data?.title.slice(0, 40)}...`
//               : data?.title}
//           </p>
//         </div>
//       </a>
//     </div>
//   );
// };

// export default MonoBlog;



// const MonoBlog = ({ data }) => {
//   const formattedDate = data?.createdAt
//     ? new Date(data.createdAt).toLocaleDateString()
//     : "";

//   return (
//     <div className="overflow-hidden rounded-lg border border-gray-100 hover:shadow-2xl bg-white shadow-gray-300 transition-all duration-300">
//       <a href={`/blogs/${data?._id}`}>
      
//         <img
//           src={data?.image}
//           alt={data?.title}
//           className="w-full h-56.5 object-cover"
//         />

//         <div className="m-6">
//           <p className="text-[10px] xs:text-[14px] font-normal text-gray-400">
//             {formattedDate} / {data?.comments?.length || 0} Comments
//           </p>

//           <p className="text-[14px] xs:text-lg font-medium text-[#333333]">
//             {data?.title?.length > 40
//               ? `${data.title.slice(0, 40)}...`
//               : data?.title}
//           </p>
//         </div>
//       </a>
//     </div>
//   );
// };

// export default MonoBlog;


import { Link } from "react-router-dom";

const MonoBlog = ({ data }) => {
  const formattedDate = data?.createdAt
    ? new Date(data.createdAt).toLocaleDateString()
    : "";

  return (
    <div className="overflow-hidden rounded-lg border border-gray-100 hover:shadow-2xl bg-white shadow-gray-300 transition-all duration-300">
      <Link to={`/blogs/${data?._id}`}>
        <img
          src={data?.image}
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
// / {data?.comments?.length || 0} Comments