import React from "react";
import Image01 from "../assets/images/ourworks/Gallery-01.jpg";
import Image02 from "../assets/images/ourworks/Gallery-02.jpg";
import Image03 from "../assets/images/ourworks/Gallery-07.jpg";
import Image04 from "../assets/images/ourworks/Gallery-04.jpg";
import Image05 from "../assets/images/ourworks/Gallery-05.jpg";
import Image06 from "../assets/images/ourworks/Gallery-06.jpg";

const ImageGridEven = () => {
  const items = [
    { id: 1, src: Image01, text: "Image 1" },
    { id: 2, src: Image02, text: "Image 2" },
    { id: 3, src: Image03, text: "Image 3" },
    { id: 4, src: Image04, text: "Image 4" },
    { id: 5, src: Image05, text: "Image 5" },
    { id: 6, src: Image06, text: "Image 6" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:grid-rows-3 px-20 lg:px-36 mt-10">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative group overflow-hidden rounded-lg shadow-lg"
        >
          {/* Image */}
          <img
            src={item.src}
            alt={`Image ${item.id}`}
            className="w-full h-full object-cover"
          />

          {/* Hover Text */}
          <div className="absolute inset-x-0 bottom-[-100%] group-hover:bottom-0 transition-all duration-300 ease-in-out bg-black bg-opacity-50 text-white text-center py-2">
            {item.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGridEven;
