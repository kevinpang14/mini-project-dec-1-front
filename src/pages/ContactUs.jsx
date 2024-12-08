import HeaderTextCenter from "../components/HeaderTextCenter";
import Brands from "../components/Brands";
import ContactBanner from "../components/ContactBanner";
import ContactSection from "../components/ContactSection";
import HeaderImage from "../assets/images/header/Hero-Image-6.png";

const ContactUs = () => {
  return (
    <div>
      <HeaderTextCenter
        title="We would love to hear from you"
        height="h-[36rem] lg:h-[44rem]"
        image={HeaderImage}
        translateY="translate-y-0"
      />
      {/* Contact Section */}
      <ContactSection />
      {/* Brands Section */}
      <Brands />
      {/* Contact Banner */}
      <ContactBanner />
    </div>
  );
};

export default ContactUs;
