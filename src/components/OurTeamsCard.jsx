import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeamByUsernames } from "../store/slices/teamsSlice";

const OurTeamsCard = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.teams);

  useEffect(() => {
    const usernames = ["deni.irawan", "emir"];
    dispatch(fetchTeamByUsernames(usernames));
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;
  return (
    <div className="bg-white py-10 px-5 lg:px-10 lg:mx-10 lg:py-20 lg:my-10">
      <div className="flex justify-center items-center mb-8">
        <h1 className="text-3xl font-bold">Meet the heroes behind the magic</h1>
      </div>

      {/* Grid Container for Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        {data.map((member) => (
          <div className="border overflow-hidden shadow-md" key={member.id}>
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-48 object-cover p-4"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{member.name}</h2>
              <p className="text-gray-600 mb-4">{member.title}</p>
              <p className="text-gray-800">{member.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeamsCard;
