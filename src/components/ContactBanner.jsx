import React from "react";

const ContactBanner = ({
  image = "src/assets/images/header/Hero-Image-3.png",
  translateY = "translate-y-0",
}) => {
  image = image || "src/assets/images/header/Hero-Image-3.png";

  return (
    <div className="bg-primary-darker py-20 px-5 mb-10 relative w-full h-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center relative">
        {/* Logo Section */}
        <img
          src="src\assets\logos\logo.svg"
          alt="dsgnr"
          className="absolute -top-20 lg:top-1/2 lg:-translate-y-1/2 -left-12 w-55 h-24 object-cover"
        />
        {/* Text Section */}
        <div className="flex flex-col justify-center relative col-start-2">
          <p className="font-bold text-2xl text-black">
            Grow Your Business. Build Great Products.
          </p>
        </div>

        {/* CTA Button Section */}
        <div className="flex justify-end mt-4 md:mt-0 col-start-2 lg:col-start-3">
          <a
            href="/book-a-call"
            className="bg-black text-white py-2 px-4 hover:bg-gray-800 transition"
          >
            Book a free call
          </a>
        </div>
      </div>
      {/* Page-Specific Image Layer */}
      {image && (
        <img
          src={image}
          alt="Page Specific Header"
          className={`absolute  bottom-0 right-2 ${translateY} w-48 h-auto object-cover opacity-100 z-10`}
        />
      )}
    </div>
  );
};

export default ContactBanner;
