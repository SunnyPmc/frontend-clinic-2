

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
