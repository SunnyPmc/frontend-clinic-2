// import doctor from "../../assets/images/doctor.jpg";
// import "./introduction.css";
// import InformationSummary from "./InformationSummary";
// import IntroductionCarousel from "./IntroductionCarousel";

// // Information summary data
// const informationSummaryData = [
//   {
//     id: 1,
//     title: "Years of clinical expertise",
//     description: "15 Y.",
//   },
//   {
//     id: 2,
//     title: "Successful treatments",
//     description: "250+",
//   },
//   {
//     id: 3,
//     title: "Specialized treatments",
//     description: "50+",
//   },
// ];

// const Introduction = () => {
//   return (
//     <div
//       className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
//       id="introduction"
//     >
//       <div className="w-full flex flex-col justify-between max-lg:text-center">
//         <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
//           <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
//             Helping You
//             <span className="text-nowrap shrink-0 inline-block w-full">
//               Hear Better & Speak Better
//             </span>
            
//           </p>
//           <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
//             We Provide <span className="text-blue-600 font-medium">hearing aid solutions</span>{" "}
//             and <span className="text-blue-600 font-medium"> speech therapy services</span> for children and adults. Our clininc
//             focuses on personalized care to improve communication, confidence and quality of life.
//           </p>
//           <p className="text-center lg:text-start">
//             <a
//               className="btn-primary btn btn-xs xxs:btn-lg text-white"
//               href="mailto:example@gmail.com"
//             >
//               Contact now
//             </a>
//           </p>
//         </div>
//         <div className="mx-auto lg:mx-0 relative">
//           <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
//             {informationSummaryData.map((item) => (
//               <InformationSummary key={item.id} item={item} />
//             ))}
//           </div>
//         </div>
//       </div>
//       <div
//         className={` ml-3.5 max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
//       >
//         {/* <img
//           className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
//           src={doctor}
//           alt="person"
//         /> */}
//          <div className="shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 bg-white rounded-3xl overflow-hidden">
//           <IntroductionCarousel />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Introduction;



import "./introduction.css";
import InformationSummary from "./InformationSummary";
import IntroductionCarousel from "./IntroductionCarousel";

const informationSummaryData = [
  { id: 1, title: "Years of clinical expertise", description: "15 Y." },
  { id: 2, title: "Successful treatments", description: "250+" },
  { id: 3, title: "Specialized treatments", description: "50+" },
];

const Introduction = () => {
  return (
    <section
      id="introduction"
      // className="relative h-screen w-full overflow-hidden"
      className="relative h-[65vh] sm:h-[75vh] lg:h-[85vh] w-full overflow-hidden rounded-3xl"
    >
      {/* Background Carousel */}
      <IntroductionCarousel />

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-xl text-white">
            <h1 className="text-3xl xxs:text-4xl sm:text-5xl xl:text-6xl font-semibold leading-tight">
              Helping You
              <span className="block">
                Hear Better & Speak Better
              </span>
            </h1>

            <p className="text-sm xxs:text-base sm:text-lg my-6 text-white/90">
              We provide{" "}
              <span className="text-white font-medium">
                hearing aid solutions
              </span>{" "}
              and{" "}
              <span className="text-white font-medium">
                speech therapy services
              </span>{" "}
              for children and adults — focused on personalized care and better
              quality of life.
            </p>

            <a
              href="mailto:example@gmail.com"
              className="btn btn-primary btn-sm xxs:btn-lg text-white"
            >
              Contact now
            </a>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-2 max-w-md">
              {informationSummaryData.map((item) => (
                <InformationSummary key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
