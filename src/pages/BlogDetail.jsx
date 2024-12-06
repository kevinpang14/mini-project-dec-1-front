import HeaderTextCenter from "../components/HeaderTextCenter";
import Brands from "../components/Brands";
import ContactBanner from "../components/ContactBanner";
import ArticleDetail from "../components/ArticleDetail";

const OurWorksDetail = () => {
  return (
    <div>
      <HeaderTextCenter
        title="The work we do, and the people we help."
        height="h-[36rem] lg:h-[44rem]"
        image="src\assets\images\header\Hero-Image-6.png"
        translateY="translate-y-0"
      />
      {/* Article Detail */}
      <ArticleDetail />

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

export default OurWorksDetail;
