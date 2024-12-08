// src\components\Testimonials.jsx

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTestimonialsList } from "../store/slices/testimonialsSlice";

const Testimonials = ({ listLimit }) => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector(
    (state) => state.testimonials.list
  );

  console.log("Testimonial data: ", data);
  useEffect(() => {
    dispatch(fetchTestimonialsList({ limit: 2 }));
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;
  return (
    <div className="bg-white py-10 lg:py-20 px-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        What our clients say about us
      </h1>

      {/* Grid Container for Testimonials */}
      <div className="grid grid-rows-1 md:grid-cols-2 gap-8">
        {/* Testimonials */}
        {data.map((testimonial) => (
          <div className="grid grid-rows-8 p-6 " key={testimonial.id}>
            <p className="text-lg mb-4 row-span-6">{testimonial.message}</p>
            <div className="flex items-center row-span-6">
              <img
                src={testimonial.foto_profile}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
