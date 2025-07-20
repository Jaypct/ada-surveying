import React, { useState } from "react";
import img from "../assets/works/samar1.png";
import lunaImage2 from "../assets/works/luna2.png";
import lunaImage3 from "../assets/works/luna3.png";
import gomezImage2 from "../assets/works/gomez2.png";
import gomezImage3 from "../assets/works/gomez3.png";
import samarImage2 from "../assets/works/samar2.png";
import samarImage3 from "../assets/works/samar3.png";
import veriimage from "../assets/works/veri.png";
import topoimage from "../assets/works/topo.png";
import alignmentimage from "../assets/works/alignment.png";
import controlimage from "../assets/works/control.png";
import hydroimage from "../assets/works/hydro.png";
import viciimage from "../assets/works/vici.png";
import roadimage from "../assets/works/road.png";
import denrimage from "../assets/works/denr.png";
import subimage from "../assets/works/sub.png";
import asbimage from "../assets/works/asb.jpeg";
import caimage from "../assets/works/caap.jpg";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
  const worksData = [
    {
      image: veriimage,
      image2: lunaImage2,
      image3: lunaImage3,
      title: "Relocation - Segregation Survey",
      subtitle: "CADIZ CITY",
      description: "This is a description for the selected work.",
    },
    {
      image: subimage,
      image2: gomezImage2,
      image3: gomezImage3,
      title: "Subdivision/Consilidation Survey",
      subtitle: "BACOLOD CITY",
      description: "This is a description for the selected work.",
    },
    {
      image: denrimage,
      image2: samarImage2,
      image3: samarImage3,
      title: "Verification Survey",
      subtitle: "SAMAR (GWEC)",
      description: "This is a description for the selected work.",
    },
    {
      image: topoimage,
      image2: img,
      image3: img,
      title: "Topographic Survey",
      subtitle: "SAGAY CITY",
      description: "This is a description for the selected work.",
    },
    {
      image: asbimage,
      title: "As-Built Survey",
      subtitle: "Branding",
      description: "This is a description for the selected work.",
    },
    {
      image: hydroimage,
      title: "Hydrographic Survey",
      subtitle: "Branding",
      description: "This is a description for the selected work.",
    },
    {
      image: roadimage,
      title: "Engineering and Specialized Survey",
      subtitle: "Branding",
      description: "This is a description for the selected work.",
    },
    {
      image: alignmentimage,
      title: "Construction and Alignment Survey",
      subtitle: "Branding",
      description: "This is a description for the selected work.",
    },
    {
      image: caimage,
      title: "CAAP Height Clearance & Obstacle Limitation Assistance",
      subtitle: "Branding",
      description: "This is a description for the selected work.",
    },
    {
      image: denrimage,
      title: "Survey Plan Approval & Titling Assistance",
      subtitle: "Branding",
      description: "This is a description for the selected work.",
    },
    {
      image: viciimage,
      title: "Vicinity & Location Mapping",
      subtitle: "Branding",
      description: "This is a description for the selected work.",
    },
    {
      image: img,
      title: "Drone Surveying & GIS Mapping",
      subtitle: "Branding",
      description: "This is a description for the selected work.",
    },
    {
      image: controlimage,
      title: "Control Station Establishment",
      subtitle: "Branding",
      description: "This is a description for the selected work.",
    },
  ];

  const [selectedWork, setSelectedWork] = useState(null);
  const [showAllWorks, setShowAllWorks] = useState(false);

  const displayedItems = showAllWorks ? worksData : worksData.slice(0, 3);

  return (
    <section id="works" className="-scroll-mt-15 p-10 min-h-screen">
      <motion.div
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        className="text-center mb-10"
      >
        <h1 className="text-3xl font-bold">Our Works</h1>
        <p className="text-lg text-black dark:text-white">
          - our awesome works -
        </p>
      </motion.div>

      {/* Grid */}
      <div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6"
      >
        {displayedItems.map((work, index) => (
          <div
            key={index}
            className="group w-full max-w-xs mx-auto h-auto rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 relative cursor-pointer"
            onClick={() => {
              setSelectedWork(work);
              document.getElementById("worksModal").showModal();
            }}
          >
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              className="relative w-full aspect-[9/12]"
            >
              <img
                src={work.image}
                alt={`work-${index}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="hidden md:block absolute bottom-0 inset-x-0 bg-[rgba(0,0,0,0.6)] text-white p-4 opacity-0 group-hover:opacity-100 text-center transition-all duration-300">
                <h3 className="text-[#ffde01] text-base font-semibold">
                  {work.title}
                </h3>
                <p className="text-xs">{work.subtitle}</p>
              </div>
            </motion.div>
            <div className="block md:hidden mt-2 text-center">
              <h3 className="text-[#ffde01] text-lg font-semibold">
                {work.title}
              </h3>
              <p className="text-sm">{work.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View More / View Less Button */}
      {worksData.length > 3 && (
        <div className="flex justify-center mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowAllWorks((prev) => !prev)}
            className="bg-[#ffde01] text-black text-base font-semibold px-6 py-3 rounded-[10px] hover:bg-yellow-400 transition-all duration-300"
          >
            {showAllWorks ? "View Less" : "View More"}
          </motion.button>
        </div>
      )}

      {/* Modal */}
      <dialog id="worksModal" className="modal">
        <div className="modal-box w-full max-w-3xl overflow-y-auto max-h-[80vh]">
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">{selectedWork?.title}</h3>
            <p className="py-2">{selectedWork?.subtitle}</p>
            <p className="pb-4">{selectedWork?.description}</p>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
            {selectedWork?.image && (
              <img
                src={selectedWork?.image}
                alt="work"
                className="w-full sm:w-[30%] object-cover rounded-md"
              />
            )}
            {selectedWork?.image2 && (
              <img
                src={selectedWork?.image2}
                alt="work2"
                className="w-full sm:w-[30%] object-cover rounded-md"
              />
            )}
            {selectedWork?.image3 && (
              <img
                src={selectedWork?.image3}
                alt="work3"
                className="w-full sm:w-[30%] object-cover rounded-md"
              />
            )}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </section>
  );
};

export default Works;
