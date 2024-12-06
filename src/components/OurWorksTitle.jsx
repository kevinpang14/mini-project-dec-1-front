import React from "react";

const OurWorksTitle = () => {
  return (
    <div className="bg-white py-10 px-10">
      <div className="grid grid-rows-2 items-center">
        {/* Left Section - Title */}
        <div>
          <h1 className="text-3xl font-bold">Featured Work</h1>
        </div>

        {/* Right Section - Description */}
        <div className="mt-4 md:mt-0 text-right w-1/2 lg:w-1/3 justify-self-end">
          <p className="text-lg text-gray-600">
            We are an award-winning creative & design agency committed to
            excellence since forever.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurWorksTitle;
