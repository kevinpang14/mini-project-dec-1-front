// src\components\Info.jsx

import React from "react";
import InfoCard from "./InfoCard"; // Import the InfoCard component
import DesignIcon from "../assets/icons/info/pen-tool-2.svg";
import ResearchIcon from "../assets/icons/info/search-normal.svg";
import ManagementIcon from "../assets/icons/info/briefcase.svg";
import DevelopmentIcon from "../assets/icons/info/scroll.svg";

const Info = () => {
  return (
    <div className="bg-white py-10 px-5 my-10 border-b-1 border-gray-300">
      {/* Features Section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
        <InfoCard title="Exceptional Design" icon={DesignIcon} />
        <InfoCard title="In-Depth Research" icon={ResearchIcon} />
        <InfoCard title="Product Management" icon={ManagementIcon} />
        <InfoCard title="No-Code Development" icon={DevelopmentIcon} />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-10">
        {/* Left Side */}
        <div className="flex-1 text-center">
          <h1 className="text-6xl font-bold text-primary-darker">
            hello<span className="text-black">.</span>
          </h1>
        </div>

        {/* Middle */}
        <div className="flex-1 flex items-center justify-center">
          <h2 className="text-4xl font-bold mt-2 text-right">
            Award-winning agency specializing in creative design
          </h2>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <p className="text-lg mt-4 text-left">
            We help businesses grow, launch products, and build enduring
            relationships with our communities.
          </p>
          <a
            href="/our-info"
            className="text-black font-bold underline mt-4 self-start"
          >
            OUR INFO
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;
