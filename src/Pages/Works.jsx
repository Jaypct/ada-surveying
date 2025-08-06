import React, { useState } from "react";
import img from "../assets/works/samar1.png";
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
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination } from "swiper/modules";

import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const Works = () => {
  const worksData = [
    {
      image: veriimage,
      image2: topoimage,
      image3: topoimage,
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

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="works" className="-scroll-mt-15 p-10 min-h-screen">
      <motion.div
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        className="text-center mb-10"
      >
        <h1 className="text-3xl font-bold">Our Works</h1>
        <p className="text-lg text-black dark:text-white mb-30">
          - our awesome works -
        </p>
      </motion.div>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        slideToClickedSlide={true}
        onRealIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="swiper-container relative py-8"
      >
        {worksData.map((w, index) => (
          <SwiperSlide
            key={index}
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          >
            <motion.div
              variants={textVariant(0.2)}
              initial="hidden"
              whileInView="show"
            >
              <img
                src={w.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-2xl object-cover"
              />
            </motion.div>
          </SwiperSlide>
        ))}

        <div className="swiper-pagination mt-4 text-center" />
      </Swiper>
      {/* Description Below Carousel */}
      {worksData[activeIndex] && (
        <motion.div
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="mt-6 text-center px-4"
        >
          <h2 className="text-black dark:text-white text-2xl font-semibold">
            {worksData[activeIndex].title}
          </h2>
          <p className="text-black dark:text-white text-sm italic">
            {worksData[activeIndex].subtitle}
          </p>
          <p className="text-black dark:text-white text-base mt-2">
            {worksData[activeIndex].description}
          </p>
        </motion.div>
      )}
    </section>
  );
};

export default Works;
