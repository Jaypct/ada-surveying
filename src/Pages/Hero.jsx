import logo from "../assets/images/adaa.png";
import img from "../assets/imgHero/img1.png";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home">
      <div className="h-screen w-screen  flex flex-col items-center justify-center px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 ">
          {/* Image */}
          <img src={logo} alt="" className="w-40 md:w-60 h-auto" />

          {/* Vertical Line (desktop) */}
          <div className="hidden md:block w-1 h-32 bg-black dark:bg-white"></div>

          {/* Horizontal Line (mobile) */}
          <div className="block md:hidden w-60 h-1 bg-black dark:bg-white mb-10"></div>

          {/* Text Content */}
          <div className="text-center text-black dark:text-white">
            <h1 className="text-2xl md:text-4xl font-bold">
              Ada Land Surveying Services
            </h1>
            <p className="mt-4 text-base md:text-lg max-w-md">
              Delivering accurate and dependable surveying solutions for
              seamless project execution and development.
            </p>
          </div>
        </div>
        {/* Button */}
        <a
          href="#about"
          className="mt-6 px-6 py-2 bg-transparent border-2 border-black dark:border-white rounded-3xl text-black dark:text-white hover:bg-[#ffde01] transition-colors duration-300 hover:text-white hover:dark:text-black"
        >
          Learn More
        </a>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0 w-full h-[400px] z-0 pointer-events-none"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffd700"
          fill-opacity="1"
          d="M0,32L21.8,64C43.6,96,87,160,131,165.3C174.5,171,218,117,262,85.3C305.5,53,349,43,393,32C436.4,21,480,11,524,26.7C567.3,43,611,85,655,101.3C698.2,117,742,107,785,101.3C829.1,96,873,96,916,85.3C960,75,1004,53,1047,80C1090.9,107,1135,181,1178,197.3C1221.8,213,1265,171,1309,138.7C1352.7,107,1396,85,1418,74.7L1440,64L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Hero;

// <div className="w-full min-h-screen flex lg:flex-row justify-between items-center px-6 py-10">
//   {/* Left Content */}
//   <div className="w-full lg:w-1/2 text-center lg:text-left">
//     <motion.h1
//       variants={fadeIn("right", 0.2)}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: false, amount: 0.2 }}
//       className="text-3xl md:text-4xl lg:text-5xl"
//     >
//       <span className="font-bold">Land</span> Surveying Services
//     </motion.h1>
//     <motion.p
//       variants={fadeIn("right", 0.2)}
//       initial="hidden"
//       whileInView="show"
//       className="text-lg md:text-xl lg:text-2xl mt-6 max-w-xl mx-auto lg:mx-0"
//     >
//       Delivering accurate and dependable surveying solutions for seamless
//       project execution and development.
//     </motion.p>
//     <motion.button
//       variants={fadeIn("right", 0.2)}
//       initial="hidden"
//       whileInView="show"
//       className="bg-[#ffde01] w-1/2 p-3 mt-8 rounded-lg text-black"
//     >
//       <a href="#about">Learn more</a>
//     </motion.button>
//   </div>

//   {/* Right Images (Hidden on small screens) */}
//   <div className="hidden lg:flex pr-4 mb-20">
//     <motion.img
//       variants={fadeIn("right", 0.2)}
//       initial="hidden"
//       whileInView="show"
//       src={img}
//       className="clip-pentagon xl:h-125 xl:w-60 h-100 w-50 object-cover hover:transition-transform hover:scale-110 hover:duration-300"
//     />

//     <motion.img
//       variants={textVariant(0.2)}
//       initial="hidden"
//       whileInView="show"
//       src={img}
//       className="clip-pentagon xl:h-125 xl:w-60 h-100 w-50 object-cover mt-6 hover:transition-transform hover:scale-110 hover:duration-300"
//     />
//     <motion.img
//       variants={fadeIn("left", 0.2)}
//       initial="hidden"
//       whileInView="show"
//       src={img}
//       className="clip-pentagon xl:h-125 xl:w-60 h-100 w-50 object-cover hover:transition-transform hover:scale-110 hover:duration-300"
//     />
//   </div>
// </div>

// <div className="relative">
//   <img src={img} alt="img" className="w-full h-screen object-cover" />

//   {/* Desktop View */}
//   <div className="absolute top-[50%] z-11 w-auto">
//     <motion.div
//       variants={fadeIn("right", 0.2)}
//       initial="hidden"
//       whileInView="show"
//       className="clip-pentagon md:block bg-black/50 lg:w-auto w-180 h-auto hidden"
//     >
//       <div className="px-30 py-6 z-11 w-250">
//         <motion.h1
//           variants={fadeIn("up", 0.4)}
//           initial="hidden"
//           whileInView="show"
//           className="lg:text-6xl md:text-5xl font-bold text-[#ffde01] "
//         >
//           Land Surveying Services
//         </motion.h1>
//         <motion.p
//           variants={fadeIn("up", 0.4)}
//           initial="hidden"
//           whileInView="show"
//           className="lg:text-2xl md:text-xl mt-10 text-black lg:w-auto w-120 dark:text-white"
//         >
//           Delivering accurate and dependable surveying solutions for
//           seamless project execution and development.
//         </motion.p>

//         <motion.a
//           variants={fadeIn("up", 0.5)}
//           initial="hidden"
//           whileInView="show"
//           href="#about"
//           className="mt-10
//                  px-8 py-3 rounded-2xl
//                  bg-transparent text-[#ffde01] font-semibold
//                  border-2 border-[#ffde01]
//                  hover:bg-[#ffde01] hover:text-black
//                  transition-colors duration-300
//                  shadow-md
//                  focus:outline-none focus:ring-4 focus:ring-yellow-300
//                  flex items-center gap-3 w-[50%]"
//         >
//           <span className="flex items-center gap-2">
//             Learn More
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M17 8l4 4m0 0l-4 4m4-4H3"
//               />
//             </svg>
//           </span>
//         </motion.a>
//       </div>
//     </motion.div>
//   </div>

//   {/* phone view */}
//   <div className="block md:hidden absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
//     <motion.h1
//       variants={fadeIn("up", 0.4)}
//       initial="hidden"
//       whileInView="show"
//       className="sm:text-3xl font-bold text-[#ffde01] w-auto"
//     >
//       Land Surveying Services
//     </motion.h1>
//     <motion.p
//       variants={fadeIn("up", 0.4)}
//       initial="hidden"
//       whileInView="show"
//       className="mt-10 text-black sm:text-xl font-bold dark:text-white"
//     >
//       Delivering accurate and dependable surveying solutions for seamless
//       project execution and development.
//     </motion.p>
//     <motion.a
//       variants={fadeIn("up", 0.5)}
//       initial="hidden"
//       whileInView="show"
//       href="#about"
//       className="mt-10
//                  px-8 py-3 rounded-2xl
//                  bg-transparent text-[#ffde01] font-semibold
//                  border-2 border-[#ffde01]
//                  hover:bg-[#ffde01] hover:text-black
//                  transition-colors duration-300
//                  shadow-md
//                  focus:outline-none focus:ring-4 focus:ring-yellow-300
//                  flex items-center gap-3 w-[50%]"
//     >
//       <span className="flex items-center gap-2">
//         Learn More
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M17 8l4 4m0 0l-4 4m4-4H3"
//           />
//         </svg>
//       </span>
//     </motion.a>
//   </div>
// </div>

// <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
//   <motion.h1
//     variants={textVariant(0.2)}
//     initial="hidden"
//     whileInView="show"
//     className="text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-xl mb-6 tracking-tight"
//   >
//     Major Project Milestones
//   </motion.h1>
//   <motion.p
//     variants={textVariant(0.3)}
//     initial="hidden"
//     whileInView="show"
//     className="text-base md:text-2xl text-white text-center max-w-xl mb-6 mt-2 drop-shadow-lg font-light opacity-70"
//   >
//     Delivering accurate and dependable surveying solutions for seamless
//     project execution and development.
//   </motion.p>
//   <motion.a
//     variants={textVariant(0.4)}
//     initial="hidden"
//     whileInView="show"
//     href="#about"
//     className="mt-4 px-8 py-3 rounded-2xl bg-[#ffde01] text-black font-bold shadow-lg hover:bg-yellow-400 hover:text-white transition-colors duration-300 text-lg border border-yellow-300 focus:outline-none focus:ring-4 focus:ring-yellow-300 flex items-center gap-3"
//   >
//     <span className="flex items-center gap-2">
//       Learn More
//       <svg
//         className="w-6 h-6"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M17 8l4 4m0 0l-4 4m4-4H3"
//         ></path>
//       </svg>
//     </span>
//   </motion.a>
// </div>
