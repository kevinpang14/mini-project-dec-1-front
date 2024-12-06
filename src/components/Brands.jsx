import React from "react";
import SpotifyLogo from "../assets/logos/brands/g10.svg";
import DHLLogo from "../assets/logos/brands/Group-1.svg";
import GoogleLogo from "../assets/logos/brands/Group-2.svg";
import DropboxLogo from "../assets/logos/brands/Group-10.svg";
import StripeLogo from "../assets/logos/brands/Group.svg";
import RedditLogo from "../assets/logos/brands/Artwork.svg";
import AirbnbLogo from "../assets/logos/brands/Airbnb.svg";
import TeslaLogo from "../assets/logos/brands/tesla.svg";

const Brands = ({ title, enableFilter = true }) => {
  // Conditional filter class
  const filterClasses = enableFilter
    ? "filter grayscale opacity-50 hover:grayscale-0 hover:opa  city-100 transition duration-300"
    : "";

  return (
    <div className="bg-gray-100 py-20 lg:py-40 px-5">
      {/* Title Section */}
      {title && (
        <div className="max-w-4xl text-center px-4 z-20 mb-10 mx-auto">
          <h1 className="text-6xl text-black font-bold">{title}</h1>
        </div>
      )}

      {/* Grid Section */}
      <div
        className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center ${filterClasses}`}
      >
        {/* Logo 1 */}
        <div className="flex justify-center items-center border-black border-b border-r p-4">
          <img src={SpotifyLogo} alt="Spotify" className="h-10" />
        </div>

        {/* Logo 2 */}
        <div className="flex justify-center items-center border-black border-b md:border-r p-4">
          <img src={DropboxLogo} alt="Dropbox" className="h-10" />
        </div>

        {/* Logo 3 */}
        <div className="flex justify-center items-center border-black border-b border-r md:border-r-0 lg:border-r p-4">
          <img src={TeslaLogo} alt="Tesla" className="h-10" />
        </div>

        {/* Logo 4 */}
        <div className="flex justify-center items-center border-black border-b md:border-b md:border-r lg:border-r-0 p-4">
          <img src={RedditLogo} alt="Reddit" className="h-10" />
        </div>

        {/* Logo 5 */}
        <div className="flex justify-center items-center border-black border-r border-b lg:border-b-0 p-4">
          <img src={GoogleLogo} alt="Google" className="h-10" />
        </div>

        {/* Logo 6 */}
        <div className="flex justify-center items-center border-black border-b lg:border-r lg:border-b-0 p-4">
          <img src={StripeLogo} alt="Stripe" className="h-10" />
        </div>

        {/* Logo 7 */}
        <div className="flex justify-center items-center border-black border-r p-4">
          <img src={DHLLogo} alt="DHL" className="h-10" />
        </div>

        {/* Logo 8 */}
        <div className="flex justify-center items-center border-black md:border-r lg:border-r-0 p-4">
          <img src={AirbnbLogo} alt="Airbnb" className="h-10" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
