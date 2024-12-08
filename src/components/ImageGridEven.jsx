import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPortfolioList } from "../store/slices/portfoliosSlice";
import { Link } from "react-router-dom";

const ImageGridEven = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.portfolios.list);

  console.log("Portfolio data: ", data);
  useEffect(() => {
    dispatch(fetchPortfolioList({ page: 1, limit: 7 }));
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:grid-rows-3 px-20 lg:px-36 mt-10">
      {data.map((portfolio) => (
        <div
          key={portfolio.id}
          className="relative group overflow-hidden rounded-lg shadow-lg max-h-[28rem] w-auto"
        >
          <Link to={`/our-works/${portfolio.id}`} key={portfolio.id}>
            {/* Image */}
            <img
              src={portfolio.banner}
              alt={portfolio.title}
              className="w-full h-full object-cover"
            />

            {/* Hover Text */}
            <div className="absolute inset-x-0 bottom-[-100%] group-hover:bottom-0 transition-all duration-300 ease-in-out bg-black bg-opacity-50 text-white text-center py-2">
              {portfolio.title}
            </div>
            <p>{portfolio.id}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ImageGridEven;
