import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logos/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page is scrolled down
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full flex justify-between items-center py-4 md:py-6 px-10 z-50 transition-all duration-1000 ${
        isScrolled ? "bg-primary-default shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="text-white font-bold text-xl">
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-12 h-12" />
        </Link>
      </div>

      {/* Hamburger Button */}
      <div>
        <button
          className="bg-white focus:outline-none p-2"
          onClick={toggleMenu}
        >
          <div className="bg-black h-1 w-6 mb-1"></div>
          <div className="bg-black h-1 w-6"></div>
        </button>
      </div>

      {/* Desktop Menu */}
      {/* <ul className="hidden md:flex space-x-4 text-black">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/our-works">Our Works</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul> */}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 right-16 bg-white text-black text-center w-48 shadow-lg p-4 ">
          <ul className="space-y-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/our-works">Our Works</Link>
            </li>
            <li>
              <Link to="/blog-list">Blog</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
