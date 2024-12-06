// src/components/HeaderTextCenter.jsx
import React from "react";

const HeaderTextCenter = ({
  title,
  image,
  height = "h-64",
  translateY = "translate-y-12",
}) => {
  return (
    <header
      className={`bg-primary-default ${height} flex items-center justify-center relative`}
    >
      {/* Shared Image Layer 1 */}
      <img
        src="src\assets\images\header\Group-1@2x.png"
        alt="Shared Background"
        className="absolute inset-0 w-full h-full object-cover opacity-100 z-0"
      />

      {/* Page-Specific Image Layer 2 */}
      {image && (
        <img
          src={image}
          alt="Page Specific Header"
          className={`absolute inset-x-0 bottom-0 ${translateY} w-full h-auto object-cover opacity-100 z-10`}
        />
      )}

      {/* Text Layer */}
      <div className="max-w-xl text-center px-4 z-20">
        <h1 className="text-6xl text-black font-bold">{title}</h1>
      </div>
    </header>
  );
};

export default HeaderTextCenter;
