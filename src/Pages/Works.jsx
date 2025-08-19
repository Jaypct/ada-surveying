import React, { useState } from "react";

import veriimage from "../assets/works/veri.png";
import topoimage from "../assets/works/topo.png";
import alignmentimage from "../assets/works/alignment.png";
import controlimage from "../assets/works/control.png";
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
      title: "Relocation - Segregation Survey",
      subtitle: "CADIZ CITY",
      description: "Defines property lines.",
    },
    {
      image: subimage,
      title: "Subdivision / Consilidation Survey",
      subtitle: "BACOLOD CITY",
      description: "Manages land division/merging.",
    },
    {
      image: denrimage,
      title: "Verification Survey",
      subtitle: "SAMAR (GWEC)",
      description: "Confirms boundary accuracy.",
    },
    {
      image: topoimage,
      title: "Topographic Survey",
      subtitle: "SAGAY CITY",
      description: "Maps land features.",
    },
    {
      image: asbimage,
      title: "As-Built Survey",
      subtitle: "Branding",
      description: "Verifies construction accuracy.",
    },
    {
      image: roadimage,
      title: "Engineering and Specialized Survey",
      subtitle: "Branding",
      description: "Provides precise project data.",
    },
    {
      image: alignmentimage,
      title: "Construction and Alignment Survey",
      subtitle: "Branding",
      description: "Aligns structures with plans.",
    },
    {
      image: caimage,
      title: "CAAP Height Clearance & Obstacle Limitation Assistance",
      subtitle: "Branding",
      description: "Ensures airport height compliance.",
    },
    {
      image: denrimage,
      title: "Survey Plan Approval & Titling Assistance",
      subtitle: "Branding",
      description: "Guides land approval processes.",
    },
    {
      image: viciimage,
      title: "Vicinity & Location Mapping",
      subtitle: "Branding",
      description: "Creates property maps.",
    },
    {
      image: controlimage,
      title: "Control Station Establishment",
      subtitle: "Branding",
      description: "Ensures survey consistency.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="works" className="-scroll-mt-15 p-20 min-h-screen">
      <motion.div
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        className="text-center mb-4" // reduced from mb-10
      >
        <h1 className="text-3xl font-bold">Our Works</h1>
        <p className="text-lg text-black dark:text-white mb-2">
          - our awesome works -
        </p>
      </motion.div>

      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        slidesPerView="auto"
        spaceBetween={0}
        slideToClickedSlide
        onRealIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="swiper-container relative py-2 flex justify-center w-full -mx-4 sm:mx-0"
        // removed -mt-20 sm:-mt-10
      >
        {worksData.map((w, index) => {
          const isActive = index === activeIndex;
          const isPrev =
            index === (activeIndex - 1 + worksData.length) % worksData.length;
          const isNext = index === (activeIndex + 1) % worksData.length;

          return (
            <SwiperSlide
              key={index}
              className="!w-full sm:!w-[60%] md:!w-[50%] lg:!w-[40%] flex justify-center"
            >
              <motion.div
                variants={textVariant(0.2)}
                initial="hidden"
                whileInView="show"
                className="relative"
              >
                <img
                  src={w.image}
                  alt={`Slide ${index + 1}`}
                  className={`w-full h-96 sm:h-80 md:h-96 lg:h-[28rem] rounded-2xl object-cover transition-all duration-300 ${
                    isActive
                      ? "shadow-xl"
                      : isPrev || isNext
                      ? "shadow-2xl"
                      : "shadow"
                  }`}
                />
                {isPrev && (
                  <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white/90 dark:from-black/90 to-transparent rounded-r-2xl pointer-events-none" />
                )}
                {isNext && (
                  <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white/90 dark:from-black/90 to-transparent rounded-l-2xl pointer-events-none" />
                )}
              </motion.div>
            </SwiperSlide>
          );
        })}
        <div className="swiper-pagination mt-4 text-center" />
      </Swiper>

      {worksData[activeIndex] && (
        <motion.div
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="mt-6 text-center px-4"
        >
          <h2 className="text-yellow-400 text-2xl font-semibold">
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
