import React, { useEffect } from "react";
import HeaderTextCenter from "../components/HeaderTextCenter";
import Brands from "../components/Brands";
import ContactBanner from "../components/ContactBanner";
import HeroImage from "../assets/images/header/Hero-Image-6.png";
import MidImage from "../assets/images/midImage/Mid-Image.jpg";
import { useDispatch, useSelector } from "react-redux";
import { fetchPortfolioDetail } from "../store/slices/portfoliosSlice";
import { useParams } from "react-router-dom";

const OurWorksDetail = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector(
    (state) => state.portfolios.detail
  );
  const { id } = useParams();

  console.log("Portfolio data: ", data);
  useEffect(() => {
    if (id) {
      dispatch(fetchPortfolioDetail({ id }));
    }
  }, [dispatch, id]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  // Handle the case where data might still be null
  if (!data) return <p>No data available.</p>;
  return (
    <div>
      <HeaderTextCenter
        title="The work we do, and the people we help."
        height="h-[36rem] lg:h-[44rem]"
        image={HeroImage}
        translateY="translate-y-0"
      />

      {/* Image Section */}
      <div className="mb-6 px-36 py-10">
        <img src={MidImage} alt="Mid Image" className="w-full h-auto" />
      </div>

      {/* Our Works Content */}
      <div className="py-10 px-36">
        {/* Header Section */}
        <h1 className="text-4xl font-bold mb-4">{data.title}</h1>

        {/* Content Section */}
        <p className="text-lg text-gray-700 mb-6">{data.content}</p>
      </div>

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
