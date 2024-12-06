import HeaderTextCenter from "../components/HeaderTextCenter";
import Brands from "../components/Brands";
import ContactBanner from "../components/ContactBanner";
import ContactSection from "../components/ContactSection";

const ContactUs = () => {
  return (
    <div>
      <HeaderTextCenter
        title="The work we do, and the people we help."
        height="h-[36rem] lg:h-[44rem]"
        image="src\assets\images\header\Hero-Image-6.png"
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
