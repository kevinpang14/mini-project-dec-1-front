// src\components\OurWorksSection.jsx
// Portfolio List
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPortfolioList } from "../store/slices/portfoliosSlice";
import { Link } from "react-router-dom";

const OurWorksSection = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.portfolios.list);

  useEffect(() => {
    dispatch(fetchPortfolioList({ page: 1, limit: 7 }));
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className="bg-white py-10">
      {/* Header Section: Text and Categories */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8p px-5">
        {/* Text Section */}
        <h1 className="text-2xl sm:text-4xl font-bold text-center px-24">
          Our Work So Far
        </h1>

        {/* Categories Section */}
        <ul className="flex flex-wrap gap-4 mt-4 sm:mt-0 text-sm font-medium uppercase">
          <li className="cursor-pointer hover:text-blue-500">All</li>
          <li className="cursor-pointer hover:text-blue-500">Branding</li>
          <li className="cursor-pointer hover:text-blue-500">Illustration</li>
          <li className="cursor-pointer hover:text-blue-500">Product Design</li>
        </ul>
      </div>

      {/* Image Grid Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2  auto-rows-[minmax(0,_auto)] mt-10">
        {data.map((portfolio, index) => (
          <Link
            to={`/portfolios/${portfolio.id}`}
            key={portfolio.id}
            className={`
              ${index === 1 ? "row-span-2" : ""}
              ${index === 4 ? "row-span-2 lg:row-span-1" : ""}
              ${index === 6 ? "col-span-2 sm:col-span-1" : ""}
              `}
          >
            <img
              src={portfolio.banner}
              alt={portfolio.title}
              className={`w-full object-cover
              ${index === 1 || index === 4 ? "h-full" : "h-auto"}
           
            `}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurWorksSection;
