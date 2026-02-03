
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


const Projects = ({ data }) => {
  
   const imageUrl = data.image
    ? data.image.startsWith("http") 
      ? data.image
      : `${API_BASE_URL}/${data.image}` 
    : "/placeholder.png"; 

  return (
    <div className="max-w-106 rounded-lg outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200">
      
      <img
        src={imageUrl}
        // src={data.img}
        alt={data.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-4 xs:p-8">
        <p className="text-gray-400 text-xs font-medium">
          {data?.category}
        </p>

        <p className="text-gray-900 text-md xxs:text-lg font-semibold pt-1 mb-3">
          {data?.title}
        </p>

        <p
          style={{ lineHeight: "20px" }}
          className="text-gray-600 text-xs xxs:text-[14px]"
        >
          {data?.description}
        </p>

        {data?.link && (
          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn hover:border-picto-primary hover:text-picto-primary bg-white text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 mt-5 xs:py-5.75 px-6 max-sm:w-full"
          >
            Learn more
            <span className="ms-1 xs:ms-3">
              <FontAwesomeIcon icon={faArrowRight} size="l" />
            </span>
          </a>
        )}
      </div>
    </div>
  );
};

export default Projects;
