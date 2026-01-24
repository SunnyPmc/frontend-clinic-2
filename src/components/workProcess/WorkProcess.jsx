import WorkSteps from "./WorkSteps";

const workStepData = [
  {
    id: 1,
    title: "Hearing & Speech Assessment",
    description:
      "Comprehensive hearing tests and speech evaluations using modern diagnostic tools.",
    svgPath:
      "M16 4C19.3137 4 22 6.68629 22 10V18C22 20.2091 20.2091 22 18 22C15.7909 22 14 20.2091 14 18V10C14 8.89543 14.8954 8 16 8C17.1046 8 18 8.89543 18 10V18C18 18.7364 18.597 19.3333 19.3333 19.3333C20.0697 19.3333 20.6667 18.7364 20.6667 18V10C20.6667 7.58172 18.4183 5.33333 16 5.33333V4Z"
  },
  {
    id: 2,
    title: "Diagnosis & Planning",
    description:
      "Detailed analysis and personalized therapy planning based on patient needs.",
    svgPath:
        "M6.66667 4H21.3333C22.8061 4 24 5.19391 24 6.66667V16C24 17.4728 22.8061 18.6667 21.3333 18.6667H13.3333L8 23.3333V18.6667H6.66667C5.19391 18.6667 4 17.4728 4 16V6.66667C4 5.19391 5.19391 4 6.66667 4Z"
  },
  {
    id: 3,
    title: "Therapy & Hearing Aid Fitting",
    description:
      "Speech therapy sessions and precise hearing aid fitting for effective results.",
    svgPath:
        "M20.6667 4C23.6122 4 26 6.38781 26 9.33333V14C26 15.4728 24.8061 16.6667 23.3333 16.6667H22V9.33333C22 8.59695 21.403 8 20.6667 8C19.9303 8 19.3333 8.59695 19.3333 9.33333V18.6667C19.3333 21.6122 16.9455 24 14 24C11.0545 24 8.66667 21.6122 8.66667 18.6667V16C8.66667 14.5272 9.86057 13.3333 11.3333 13.3333H12.6667V18.6667C12.6667 19.403 13.2636 20 14 20C14.7364 20 15.3333 19.403 15.3333 18.6667V9.33333C15.3333 6.38781 17.7211 4 20.6667 4Z"  },
  {
    id: 4,
    title: "Follow-up & Support",
    description:
      "Continuous monitoring, adjustments, and long-term hearing care support.",
    svgPath:
      "M10.6667 12C12.8758 12 14.6667 10.2091 14.6667 8C14.6667 5.79086 12.8758 4 10.6667 4C8.45753 4 6.66667 5.79086 6.66667 8C6.66667 10.2091 8.45753 12 10.6667 12ZM21.3333 24H2.66667C2.29848 24 2 23.7015 2 23.3333V21.3333C2 17.6567 5.32335 14.6667 9 14.6667H12.3333C16.01 14.6667 19.3333 17.6567 19.3333 21.3333V23.3333C19.3333 23.7015 19.0349 24 18.6667 24Z"  },
];

const WorkProcess = () => {
  return (
    <div
      className="content grid xl:grid-cols-2 xl:items-center px-2 py-5 md:py-10 lg:py-25 xl:py-35 max-xxl:px-4"
      id="work-process"
    >
      <div className="lg:pe-10 xl:pe-35.75 max-xs:mb-3 max-xl:mb-8">
        <p className="section-title max-xl:text-center">How Our Special Therapy Works</p>
        <p className="mt-6 mb-4 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500">
          Our therapy process is designed to provide accurate assessment, personalized treatment, and continuous support for hearing and speech improvement. Each step is carefully planned to ensure effective and comfortable care for every patient.
        </p>
        {/* <p className="mt-6 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500">
          I blend clean design with efficient code to build engaging,
          user-friendly web experiences that stand out.
        </p> */}
      </div>

      <div className="grid xs:grid-cols-2 justify-end my-2 w-fit mx-auto ">
        {workStepData.map((data, index) => {
          return (
            <WorkSteps
              data={data}
              style={`max-xs:mt-3 p-4 sm:p-8 bg-white aspect-auto sm:max-w-78 ${
                index % 2 == 1 ? "xs:ms-3 xs:mt-6 " : "xs:mb-6"
              }`}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkProcess;
