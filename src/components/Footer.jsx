import React from "react";
import FacebookLogo from "../assets/icons/socialMedia/fb.svg";
import TwitterLogo from "../assets/icons/socialMedia/twitter.svg";
import GoogleLogo from "../assets/icons/socialMedia/google.svg";
import MailIcon from "../assets/icons/footer/sms-notification.svg";

const Footer = () => {
  return (
    <div className="bg-black text-white py-10 px-5 lg:px-10">
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <h1 className="text-3xl font-bold">dsgnr.</h1>
          <p className="mt-2">
            Dsgnr. is an award-winning creative and design agency based in New
            York, USA.
          </p>
          <a
            href="mailto:info@dsgnr.com"
            className="mt-4 inline-block bg-black text-white-500 py-2 px-6 lg:pr-12 border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition"
          >
            <img
              src={MailIcon}
              alt="info@dsgnr.com"
              className="inline-block mr-6 lg:mr-14 h-6 w-6"
            />
            info@dsgnr.com
          </a>
        </div>

        {/* Middle Section - What We Do */}
        <div>
          <h2 className="text-lg font-semibold mb-2">What We Do</h2>
          <ul className="space-y-1">
            <li>
              <a href="/" className="hover:underline">
                Intro
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Work
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Who We Are */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Who We Are</h2>
          <ul className="space-y-1">
            <li>
              <a href="/about-us" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                News
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Testimonials
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 flex justify-between items-center">
        {/* Privacy Policy and Terms */}
        <div className="grid grid-cols-2 gap-10">
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>{" "}
          <a href="/terms" className="hover:underline">
            {" "}
            Terms
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
            alt="Twitter"
          >
            <img src={TwitterLogo} alt="Twitter" className="w-6 h-6" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
            alt="Facebook"
          >
            <img src={FacebookLogo} alt="Facebook" className="w-6 h-6" />
          </a>
          <a
            href="https://plus.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
            alt="Google+"
          >
            <img src={GoogleLogo} alt="Google+" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
