import HeaderTextCenter from "../components/HeaderTextCenter";
import OurWorksTitle from "../components/OurWorksTitle";
import ImageGridEven from "../components/ImageGridEven";
import Brands from "../components/Brands";
import ContactBanner from "../components/ContactBanner";

const OurWorks = () => {
  return (
    <div>
      <HeaderTextCenter
        title="The work we do, and the people we help."
        height="h-[36rem] lg:h-[44rem]"
        image="src\assets\images\header\Hero-Image-6.png"
        translateY="translate-y-0"
      />
      <div className="mr-10">
        <OurWorksTitle />
      </div>
      <ImageGridEven />
      <Brands
        title={
          "We worked with the world’s biggest brands and the most innovative startups"
        }
        enableFilter={false}
      />
      <ContactBanner />
    </div>
  );
};

export default OurWorks;
