import logo from "../assets/images/adaa.png";
import img from "../assets/images/bg.webp";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <section id="home" className="bg-white relative overflow-hidden">
      <div className="h-screen w-screen flex flex-col items-center justify-center px-4 relative">
        {/* Background Image at the bottom */}
        <div
          className="absolute inset-0 w-full h-full opacity-30 z-0 "
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Top SVG above background, below content */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute top-0 w-full h-[150px] md:h-[300px] z-10 pointer-events-none rotate-180"
          preserveAspectRatio="none"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <path
            fill="#e6c510"
            fillOpacity="1"
            strokeWidth="3"
            d="M0,160L0,160L110.8,160L110.8,224L221.5,224L221.5,128L332.3,128L332.3,224L443.1,224L443.1,128L553.8,128L553.8,288L664.6,288L664.6,288L775.4,288L775.4,224L886.2,224L886.2,64L996.9,64L996.9,224L1107.7,224L1107.7,160L1218.5,160L1218.5,192L1329.2,192L1329.2,224L1440,224L1440,320L1329.2,320L1329.2,320L1218.5,320L1218.5,320L1107.7,320L1107.7,320L996.9,320L996.9,320L886.2,320L886.2,320L775.4,320L775.4,320L664.6,320L664.6,320L553.8,320L553.8,320L443.1,320L443.1,320L332.3,320L332.3,320L221.5,320L221.5,320L110.8,320L110.8,320L0,320L0,320Z"
          />
        </motion.svg>

        {/* Content (above SVGs and background) */}
        <div className="z-20 flex flex-col md:flex-row items-center justify-center gap-6 text-black">
          {/* Image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
          >
            <img src={logo} alt="" className="w-40 md:w-60 h-auto" />
          </motion.div>

          {/* Vertical Line (desktop) */}
          <motion.div
            className="hidden md:block w-1 h-32 bg-black"
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
          ></motion.div>

          {/* Horizontal Line (mobile) */}
          <motion.div
            className="block md:hidden w-60 h-1 bg-black mb-10"
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
          ></motion.div>

          {/* Text Content */}
          <motion.div
            className="text-center"
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
          >
            <h1 className="text-2xl md:text-4xl font-bold">
              Ada Land Surveying Services
            </h1>
            <p className="mt-4 text-base md:text-lg max-w-md">
              Delivering accurate and dependable surveying solutions for
              seamless project execution and development.
            </p>
          </motion.div>
        </div>

        {/* Button */}
        <motion.a
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          href="#about"
          className="z-999 mt-6 px-6 py-2 bg-transparent border-2 border-black  rounded-3xl text-black hover:bg-[#ffde01] transition-colors duration-300 hover:text-black cursor-pointer"
        >
          Learn More
        </motion.a>

        {/* Bottom SVG above background but below content */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full h-[200px] md:h-[350px] z-10 pointer-events-none"
          preserveAspectRatio="none"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <path
            fill="#e6c510"
            fillOpacity="1"
            stroke="black"
            strokeWidth="3"
            d="M0,192L0,192L120,192L120,128L240,128L240,160L360,160L360,224L480,224L480,64L600,64L600,256L720,256L720,96L840,96L840,96L960,96L960,192L1080,192L1080,128L1200,128L1200,128L1320,128L1320,128L1440,128L1440,320L1320,320L1320,320L1200,320L1200,320L1080,320L1080,320L960,320L960,320L840,320L840,320L720,320L720,320L600,320L600,320L480,320L480,320L360,320L360,320L240,320L240,320L120,320L120,320L0,320L0,320L0,320L0,320Z"
          />
        </motion.svg>
      </div>
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
