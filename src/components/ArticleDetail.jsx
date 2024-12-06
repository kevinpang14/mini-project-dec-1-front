import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBlogDetail } from "../store/slices/blogsSlice";

const ArticleDetail = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { detail, status, error } = useSelector((state) => state.blogs);

  useEffect(() => {
    if (slug) {
      dispatch(fetchBlogDetail(slug));
    }
  }, [dispatch, slug]);

  if (status === "loading") return <p>Loading blog details...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    detail && (
      <div className="container mx-auto py-10">
        {/* Image Section */}
        <div className="mb-6 px-36">
          <img
            src={detail.banner}
            alt={detail.title}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Content Section */}
        <div className="py-10 px-36">
          <h1 className="text-4xl font-bold mb-4">{detail.title}</h1>
          <p className="text-lg text-gray-700 mb-6">{detail.content}</p>
        </div>
      </div>
    )
  );
};

export default ArticleDetail;
