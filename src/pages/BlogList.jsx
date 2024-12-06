import HeaderTextCenter from "../components/HeaderTextCenter";
import Brands from "../components/Brands";
import ContactBanner from "../components/ContactBanner";
import Articles from "../components/Articles";
import HeaderImage from "../assets/images/header/Hero-Image-6.png";

const BlogList = () => {
  return (
    <div>
      {/* Header Text Center */}
      <HeaderTextCenter
        title="The work we do, and the people we help."
        height="h-[36rem] lg:h-[44rem]"
        image={HeaderImage}
        translateY="translate-y-0"
      />
      {/* Articles */}
      <Articles />

      {/* Brands Section */}
      <Brands />
      {/* Contact Banner */}
      <ContactBanner />
    </div>
  );
};

export default BlogList;
