// src\components\Testimonials.jsx

import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-white py-10 lg:py-20 px-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        What our clients say about us
      </h1>

      {/* Grid Container for Testimonials */}
      <div className="grid grid-rows-1 md:grid-cols-2 gap-8">
        {/* Testimonial 1 */}
        <div className="grid grid-rows-8 p-6 ">
          <p className="text-lg mb-4 row-span-6">
            "I would like to say that this experience was great. The team was
            very professional and answered all our questions and was committed
            to completing our project on time. We are happy to have worked with
            dsgnr and would hire them again and would recommend them to anyone
            else looking for a designer and developer. They know their stuff!"
          </p>
          <div className="flex items-center row-span-6">
            <img
              src="milton-austin.jpg"
              alt="Milton Austin"
              className="w-12 h-12 rounded-full mr-3"
            />
            <div>
              <p className="font-semibold">Milton Austin</p>
              <p className="text-sm text-gray-500">Product Manager, Slack</p>
            </div>
          </div>
        </div>
        {/* Testimonial 2 */}
        <div className="grid grid-rows-8 p-6 ">
          <p className="text-lg mb-4 row-span-6">
            "Great work ethic and very reliable! Brooklyn was our logo designer.
            She walked us through many iterations and guided us on all aspects
            of the process. Very professional, will use them again soon!"
          </p>
          <div className="flex items-center row-span-2">
            <img
              src="jane-cooper.jpg"
              alt="Jane Cooper"
              className="w-12 h-12 rounded-full mr-3"
            />
            <div>
              <p className="font-semibold">Jane Cooper</p>
              <p className="text-sm text-gray-500">Co-founder, catco.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
