import HeaderTextCenter from "../components/HeaderTextCenter";
import OurTeamsCard from "../components/OurTeamsCard";
import Brands from "../components/Brands";
import ContactBanner from "../components/ContactBanner";

const AboutUs = () => {
  return (
    <div>
      <HeaderTextCenter
        title="The work we do, and the people we help."
        height="h-[36rem] lg:h-[44rem]"
        image="src\assets\images\header\Hero-Image-6.png"
        translateY="translate-y-0"
      />
      <div className="bg-white py-10 px-24">
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 items-center gap-10">
          <div className="row-span-1 col-span-2">
            {/* Left Section - Text */}
            <div className="col-span-2">
              <h1 className="text-4xl font-bold mb-4">Who we are</h1>
              <p className="text-lg text-gray-700 mb-4">
                We love what we do and create partnerships with our clients to
                ensure their digital transformation is positioned for long-term
                success. We believe that the human dimensions essential to start
                any successful project and that this is where splendid emotional
                relationships between the company and people are born.
              </p>
            </div>
          </div>
          {/* Right Section - Established Year */}
          <div className="text-right mt-4 col-span-1 col-start-3 ">
            <span className="text-lg font-semibold">EST. 2020</span>
          </div>

          <div className="row-start-2 col-span-3">
            {/* Bottom Section - Image */}
            <div className="flex justify-center col-span-3">
              <img
                src="src\assets\images\midImage\Mid-Image.jpg"
                alt="About Us"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Our Teams Section */}
      <OurTeamsCard />
      {/* Brands Section */}
      <Brands enableFilter={false} />
      {/* Contact Banner */}
      <ContactBanner />
    </div>
  );
};

export default AboutUs;
