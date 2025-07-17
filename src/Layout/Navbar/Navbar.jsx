import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/imgHero/logo.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#works", label: "Works" },
    { href: "#teams", label: "Teams" },
    { href: "#contact", label: "Contact" },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      }
    );

    const observedSections = [];

    const observeSections = () => {
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          observer.observe(section);
          observedSections.push(section);
        }
      });
    };

    observeSections();

    // Also try re-observing after short delay (for SPA re-rendering)
    const retryId = setTimeout(observeSections, 500);

    return () => {
      clearTimeout(retryId);
      observedSections.forEach((section) => observer.unobserve(section));
    };
  }, [window.location.pathname]); // re-run when navigating between routes

  return (
    <motion.nav
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      className="fixed top-0 left-0 right-0 z-50 w-full bg-opacity-80 bg-transparent backdrop-blur-2xl text-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-16">
        <div
          onClick={() => {
            setActiveLink("#home");
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img
            src={logo}
            alt="Logo"
            className="h-15 md:h-20 lg:h-25 w-auto object-contain cursor-pointer"
          />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isMenuOpen ? (
            <HiX className="w-7 h-7 text-black dark:text-white" />
          ) : (
            <HiMenu className="w-7 h-7 text-black dark:text-white" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-7 items-center">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => {
                setActiveLink(link.href);
                navigate("/");
              }}
              className={`text-sm font-semibold transition-transform duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#ffde01] after:transition-all after:duration-300 hover:scale-105 ${
                activeLink === link.href
                  ? "text-[#ffde01] after:w-full"
                  : "text-black dark:text-white hover:text-[#ffde01]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-black text-white py-5 px-6 space-y-4 shadow-lg animate-slideDown">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => {
                setActiveLink(link.href);
                setIsMenuOpen(false);
                navigate("/");
              }}
              className={`block text-base font-medium transition-transform duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#ffde01] after:transition-all after:duration-300 hover:scale-105 ${
                activeLink === link.href
                  ? "text-[#ffde01] after:w-full"
                  : "text-white hover:w-full hover:text-[#ffde01]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
