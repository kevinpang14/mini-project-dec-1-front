// src/components/InfoCard.jsx
import React from "react";

const InfoCard = ({ title, icon }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className=" p-4 mb-2">
        {/* <Icon className="text-3xl mb-4" /> */}
        <img src={icon} alt={title} className="w-8 h-8" />
      </div>
      <h3 className="font-semibold">{title}</h3>
    </div>
  );
};

export default InfoCard;
