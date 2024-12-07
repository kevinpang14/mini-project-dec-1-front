import HeaderTextLeft from "../components/HeaderTextLeft";
import Info from "../components/Info";
import OurWorksSection from "../components/OurWorksSection";
import OurProcess from "../components/OurProcess";
import Testimonials from "../components/Testimonials";
import Brands from "../components/Brands";
import Articles from "../components/Articles";
import ContactBanner from "../components/ContactBanner";
import HeroImage from "../assets/images/header/Hero-Elements@2x.png";

const Homepage = () => {
  return (
    <div className="min-h-[3000px]">
      <HeaderTextLeft
        title="Let’s create something great together."
        height="h-[36rem] lg:h-[44rem]"
        image={HeroImage}
      />
      <Info />
      <OurWorksSection />
      <OurProcess />
      <Testimonials />
      <Brands />
      <Articles />
      <ContactBanner />
    </div>
  );
};

export default Homepage;
