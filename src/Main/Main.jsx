import React from "react";
import Hero from "../Pages/Hero";
import About from "../Pages/About1";
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
        <section className="min-h-screen ">
          <About />
        </section>
        <section className="min-h-screen ">
          <Services />
        </section>
        <section className="min-h-screen ">
          <Works />
        </section>
        <section className="min-h-screen ">
          <Teams />
        </section>
        <section className="min-h-screen ">
          <Contact />
        </section>
      </div>
    </>
  );
};

export default Main;
