// src\components\OurProcess.jsx

import React from "react";
import sideImage from "../assets/images/sideImage/Side-Image.png";
import icon1 from "../assets/icons/ourProcess/icon-1.png";
import icon2 from "../assets/icons/ourProcess/icon-2.png";
import icon3 from "../assets/icons/ourProcess/icon.png";

const OurProcess = () => {
  return (
    <div className="bg-gray-100 py-10 px-10 lg:px-24 grid lg:grid-cols-12 gap-2">
      {/* Left Image Section */}
      <div className="col-span-12 lg:col-span-7 mb-8 md:mb-0 flex justify-center">
        <img
          src={sideImage}
          alt="Process Illustration"
          className="max-w-full max-h-full w-3/4 h-auto object-cover"
        />
      </div>

      {/* Right Text Section */}
      <div className="col-span-12 lg:col-span-5 pt-8 lg:pr-14">
        <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
          A simple, yet effective three-step process.
        </h1>

        {/* Process List */}
        <div className="space-y-8">
          {/* Process Step 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
            <div className="w-16 h-16 flex justify-center items-center md:col-span-2">
              <img src={icon2} alt="Idea Initiation" className="w-16 h-16" />
            </div>
            <div className="md:col-span-10">
              <h2 className="text-xl font-semibold mb-2">Idea Initiation</h2>
              <p className="mb-4">
                For a start, we’ll uncover what makes you stand apart and
                creatively position your brand and business.
              </p>
            </div>
          </div>

          {/* Process Step 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
            <div className="w-16 h-16 flex justify-center items-center md:col-span-2">
              <img src={icon1} alt="Execution" className="w-16 h-16" />
            </div>
            <div className="md:col-span-10">
              <h2 className="text-xl font-semibold mb-2">Execution</h2>
              <p className="mb-4">
                To deliver exceptionally, we dig deep into a brand’s essence and
                values, clearly understand them, then inject them into the
                design.
              </p>
            </div>
          </div>

          {/* Process Step 3 */}
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
            <div className="w-16 h-16 flex justify-center items-center md:col-span-2">
              <img src={icon3} alt="Launch" className="w-16 h-16" />
            </div>
            <div className="md:col-span-10">
              <h2 className="text-xl font-semibold mb-2">Launch</h2>
              <p className="mb-4">
                We provide full-service solutions to help you launch, market,
                and grow your business.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 grid col-span-12 justify-center py-1">
        <p className="text-center md:text-left">
          Wherever you are in your journey, we’d love to hear from you.{" "}
          <a href="" className="underline underline-offset-4 font-semibold">
            Book a free call
          </a>
        </p>
      </div>
    </div>
  );
};

export default OurProcess;
