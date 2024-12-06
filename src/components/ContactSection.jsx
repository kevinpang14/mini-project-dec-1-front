import React from "react";

const ContactSection = () => {
  return (
    <section className="py-20 px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side: Image */}
        <div className="flex justify-center">
          <img
            src="src\assets\images\sideImage\Side-Image-2.jpg"
            alt="Contact"
            className="w-10/12 h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right side: Contact Form */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center text-black">
            Contact Us
          </h2>
          <p className="text-lg text-center text-gray-600">
            Get in touch with us to discuss your project. We'd love to help.
          </p>
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-default"
                placeholder="Your Name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-default"
                placeholder="Your Email"
              />
            </div>

            {/* Website URL Field */}
            <div>
              <label
                htmlFor="website"
                className="block text-sm font-medium text-gray-700"
              >
                Your Website URL
              </label>
              <input
                type="url"
                id="website"
                name="website"
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-default"
                placeholder="Your Website URL"
              />
            </div>

            {/* Project Details */}
            <div>
              <label
                htmlFor="details"
                className="block text-sm font-medium text-gray-700"
              >
                Project Details
              </label>
              <textarea
                id="details"
                name="details"
                rows="4"
                required
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-default"
                placeholder="Project Details"
              ></textarea>
            </div>

            {/* Send Proposal Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-6  hover:bg-gray-800 transition duration-300"
              >
                Send Proposal
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
