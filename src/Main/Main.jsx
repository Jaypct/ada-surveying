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
    <div className="slider-container w-full m-auto overflow-x-hidden">
      <section className="min-h-screen">
        <Hero />
      </section>
      <section className="min-h-screen md:p-30">
        <About />
      </section>
      <section className="min-h-screen md:p-30">
        <Services />
      </section>
      <section className="min-h-screen md:p-30">
        <Works />
      </section>
      <section className="min-h-screen md:p-30">
        <Teams />
      </section>
      <section className="min-h-screen md:p-30">
        <Contact />
      </section>
    </div>
  );
};

export default Main;
