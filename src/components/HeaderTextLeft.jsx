// src/components/HeaderTextLeft.jsx
import React from "react";
import SharedBackground from "../assets/images/header/Group-1@2x.png";

const HeaderTextLeft = ({ title, image, height = "h-64" }) => {
  return (
    <header
      className={`bg-primary-default ${height} flex items-center justify-start p-6 relative`}
    >
      {/* Shared Image Layer 1 */}
      <img
        src={SharedBackground}
        alt="Shared Background"
        className="absolute inset-0 w-full h-full object-cover opacity-100 z-0"
      />

      {/* Page-Specific Image Layer 2 */}
      {image && (
        <img
          src={image}
          alt="Page Specific Header"
          className="absolute inset-x-0 bottom-0 translate-y-12 w-full h-auto object-cover opacity-100 z-10"
        />
      )}

      {/* Text Layer */}
      <div className="z-20 max-w-lg flex justify-end mx-auto lg:mx-52 lg:mb-20">
        <div className="text-left">
          <h1 className="text-6xl text-black font-bold mb-10">{title}</h1>
          <a
            href="/book-call"
            className="mt-4 inline-block font-semibold text-black underline hover:text-gray-700 transition"
          >
            BOOK A FREE CALL →
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeaderTextLeft;
