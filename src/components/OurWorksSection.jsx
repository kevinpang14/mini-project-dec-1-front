// src\components\OurWorksSection.jsx

import React from "react";

const OurWorksSection = () => {
  return (
    <div className="bg-white py-10">
      {/* Header Section: Text and Categories */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8p px-5">
        {/* Text Section */}
        <h1 className="text-2xl sm:text-4xl font-bold text-center px-24">
          Our Work So Far
        </h1>

        {/* Categories Section */}
        <ul className="flex flex-wrap gap-4 mt-4 sm:mt-0 text-sm font-medium uppercase">
          <li className="cursor-pointer hover:text-blue-500">All</li>
          <li className="cursor-pointer hover:text-blue-500">Branding</li>
          <li className="cursor-pointer hover:text-blue-500">Illustration</li>
          <li className="cursor-pointer hover:text-blue-500">Product Design</li>
        </ul>
      </div>

      {/* Image Grid Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2  auto-rows-[minmax(0,_auto)] mt-10">
        {/* Image 1 */}
        <img
          src="src\assets\images\ourworks\Gallery-01.jpg"
          alt="Work 1"
          className="w-full h-auto object-cover"
        />

        {/* Image 2 (Spans 2 Rows) */}
        <img
          src="src\assets\images\ourworks\Gallery-03-(Full Height).jpg"
          alt="Work 2"
          className="w-full h-full object-cover row-span-2"
        />

        {/* Image 3 */}
        <img
          src="src\assets\images\ourworks\Gallery-02.jpg"
          alt="Work 3"
          className="w-full h-auto object-cover"
        />

        {/* Image 4 */}
        <img
          src="src\assets\images\ourworks\Gallery-04.jpg"
          alt="Work 4"
          className="w-full h-auto object-cover"
        />

        {/* Image 5 */}
        <img
          src="src\assets\images\ourworks\Gallery-05.jpg"
          alt="Work 5"
          className="w-full h-full object-cover row-span-2 lg:row-span-1"
        />

        {/* Image 6 */}
        <img
          src="src\assets\images\ourworks\Gallery-06.jpg"
          alt="Work 6"
          className="w-full h-auto object-cover"
        />

        {/* Image 7 */}
        <img
          src="src\assets\images\ourworks\Gallery-07.jpg"
          alt="Work 7"
          className="w-full h-auto object-cover col-span-2 sm:col-span-1"
        />
      </div>
    </div>
  );
};

export default OurWorksSection;
