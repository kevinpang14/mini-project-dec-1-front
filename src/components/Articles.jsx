import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogList } from "../store/slices/blogsSlice";
import { Link } from "react-router-dom";

const Articles = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogList({ limit: 3 }));
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className="bg-white py-10 px-5 lg:px-10 lg:mx-10 lg:py-20 lg:my-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          Check out our interesting articles
        </h1>
        <a href="" className="font-bold underline underline-offset-4">
          SEE ALL
        </a>
      </div>

      {/* Grid Container for Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        {/* Map through the data and render Article Cards */}
        {data.map((blog) => (
          <div key={blog.slug} className="border  overflow-hidden shadow-md">
            <img
              src={blog.banner}
              alt={blog.title}
              className="w-full h-48 object-cover p-4"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.content}</p>
              <Link to={`/blog/${blog.slug}`} className="font-bold">
                READ MORE &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
