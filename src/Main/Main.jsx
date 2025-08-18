import React from "react";
import Hero from "../Pages/Hero";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Works from "../Pages/Works";
import Teams from "../Pages/Teams";
import Contact from "../Pages/Contact";

const Main = () => {
  // Simple fade-in animation for each section

  return (
    <>
      <section className="min-h-screen">
        <Hero />
      </section>
      <div className="slider-container w-full m-auto overflow-x-hidden md:p-30">
        <section className=" ">
          <About />
        </section>
        <section className=" ">
          <Services />
        </section>
        <section className=" ">
          <Works />
        </section>
        <section className=" ">
          <Teams />
        </section>
        <section className=" ">
          <Contact />
        </section>
      </div>
    </>
  );
};

export default Main;
