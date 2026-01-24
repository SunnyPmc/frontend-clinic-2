// import Projects from "./Projects";
// import card1 from "../../assets/images/portfolio-images/card-1.png";
// import card2 from "../../assets/images/portfolio-images/card-2.png";
// import card3 from "../../assets/images/portfolio-images/card-3.png";
// import card4 from "../../assets/images/portfolio-images/card-4.png";
// import card5 from "../../assets/images/portfolio-images/card-5.png";
// import card6 from "../../assets/images/portfolio-images/card-6.png";

// const projectData = [
//   {
//     id: 1,
//     image: card1,
//     category: "Hearing Aid Guide",
//     title: "Adult Hearing Aid User Guide",
//     description:
//       "Step-by-step instructions for adults to use and maintain their hearing aids effectively.",
//     link: "/materials/adult-hearing-aid.pdf",
//   },
//   {
//     id: 2,
//     image: card2,
//     category: "Speech Therapy",
//     title: "Children's Speech Exercises",
//     description:
//       "Fun, interactive exercises designed to improve speech clarity for children.",
//     link: "/materials/children-speech.pdf",
//   },
//   {
//     id: 3,
//     image: card3,
//     category: "Audiology Worksheets",
//     title: "Home Practice Worksheets",
//     description:
//       "Worksheets for at-home practice to reinforce therapy and auditory skills.",
//     link: "/materials/home-worksheets.pdf",
//   },
//   {
//     id: 4,
//     image: card4,
//     category: "Device Maintenance",
//     title: "Hearing Aid Maintenance Tips",
//     description:
//       "Simple techniques to keep hearing aids clean, safe, and working properly.",
//     link: "/materials/device-maintenance.pdf",
//   },
//   {
//     id: 5,
//     image: card5,
//     category: "Educational Videos",
//     title: "Speech Therapy Video Guides",
//     description:
//       "Step-by-step video tutorials demonstrating common speech therapy exercises.",
//     link: "/materials/speech-video-guide.pdf",
//   },
//   {
//     id: 6,
//     image: card6,
//     category: "Patient Resources",
//     title: "Audiology FAQs",
//     description:
//       "Answers to the most frequently asked questions about hearing aids and therapy.",
//     link: "/materials/audiology-faqs.pdf",
//   },
// ];

// const Portfolio = () => {
//   return (
//     <div
//       className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
//       id="portfolio"
//     >
//       <div className="xl:mb-17.5 mb-5">
//         <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
//           <p className="section-title ">Our Therapy Materials</p>
//           <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
//             Here are some of our therapy materials.
//           </p>
//         </div>
//       </div>
//       <div className="mx-auto flex justify-center">
//         <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
//           {projectData.map((data, index) => (
//             <Projects data={data} key={index} />
//           ))}
//         </div>
//       </div>
//       <div className="text-center">
//         <a
//           href="#!"
//           className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
//         >
//           More Materials
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;



import { useEffect, useState } from "react";
import Projects from "./Projects";
import { getMaterials } from "../../services/materialService";

const Material = () => {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMaterials()
      .then((res) => {
        setMaterials(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch materials", err);
        setLoading(false);
      });
  }, []);

  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title">Our Therapy Materials</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here are some of our therapy materials.
          </p>
        </div>
      </div>

      {loading ? (
        <p className="text-center">Loading materials...</p>
      ) : materials.length === 0 ? (
        <p className="text-center">No materials available</p>
      ) : (
        <div className="mx-auto flex justify-center">
          <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
            {materials.map((data) => (
              <Projects data={data} key={data._id} />
            ))}
          </div>
        </div>
      )}

      <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Materials
        </a>
      </div>
    </div>
  );
};

export default Material;
