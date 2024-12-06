import React from "react";

const OurTeamsCard = () => {
  return (
    <div className="bg-white py-10 px-5 lg:px-10 lg:mx-10 lg:py-20 lg:my-10">
      <div className="flex justify-center items-center mb-8">
        <h1 className="text-3xl font-bold">Meet the heroes behind the magic</h1>
      </div>

      {/* Grid Container for Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        {/* Article Card 1 */}
        <div className="border  overflow-hidden shadow-md">
          <img
            src="article1.jpg"
            alt="Article 1"
            className="w-full h-48 object-cover p-4"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">
              Building a stronger brand with no-code tools
            </h2>
            <p className="text-gray-600 mb-4">
              Learn about taking on a content design mindset from an expert in
              brand strategy and content design.
            </p>
            <a href="/article1" className=" font-bold">
              READ MORE &rarr;
            </a>
          </div>
        </div>

        {/* Article Card 2 */}
        <div className="border  overflow-hidden shadow-md">
          <img
            src="article2.jpg"
            alt="Article 2"
            className="w-full h-48 object-cover p-4"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">
              Copywriters and designers: How to work better together
            </h2>
            <p className="text-gray-600 mb-4">
              Good design and good copy go hand in hand. Here’s how to build
              closer collaboration between these two.
            </p>
            <a href="" className=" font-bold">
              READ MORE &rarr;
            </a>
          </div>
        </div>

        {/* Article Card 3 */}
        <div className="border  overflow-hidden shadow-md">
          <img
            src="article3.jpg"
            alt="Article 3"
            className="w-full h-48 object-cover p-4"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">
              A guide to photography website design
            </h2>
            <p className="text-gray-600 mb-4">
              A collection of resources for photography website design covering
              everything.
            </p>
            <a href="" className=" font-bold">
              READ MORE &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamsCard;
