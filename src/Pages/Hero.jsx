import React from "react";
import img from "../assets/imgHero/img-hero2.jpg";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <section id="home">
      <div className="relative">
        <img src={img} alt="img" className="w-full h-screen object-cover" />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
          <motion.h1
            variants={textVariant(0.2)}
            initial="hidden"
            whileInView="show"
            className="text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-xl mb-6 tracking-tight"
          >
            Major Project Milestones
          </motion.h1>
          <motion.p
            variants={textVariant(0.3)}
            initial="hidden"
            whileInView="show"
            className="text-base md:text-2xl text-white text-center max-w-xl mb-6 mt-2 drop-shadow-lg font-light opacity-70"
          >
            Delivering accurate and dependable surveying solutions for seamless
            project execution and development.
          </motion.p>
          <motion.a
            variants={textVariant(0.4)}
            initial="hidden"
            whileInView="show"
            href="#about"
            className="mt-4 px-8 py-3 rounded-2xl bg-[#ffde01] text-black font-bold shadow-lg hover:bg-yellow-400 hover:text-white transition-colors duration-300 text-lg border border-yellow-300 focus:outline-none focus:ring-4 focus:ring-yellow-300 flex items-center gap-3"
          >
            <span className="flex items-center gap-2">
              Learn More
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
