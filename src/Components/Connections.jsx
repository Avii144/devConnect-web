import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../Utils/connectionsSlice";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();
  try {
    const fetchConnections = async () => {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res?.data));
    };
    useEffect(() => {
      fetchConnections();
    }, []);
    if (!connections) return;
    if (connections.length === 0) {
      return <h1>No Connections found</h1>;
    }
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="text-center my-10">
      <h1 className="text-xl font-bold">Connections</h1>

      {connections.map((connection) => {
        const { _id, firstName, lastName, age, gender, photoUrl, about } =
          connection;
        return (
          <div
            className="flex m-4 p-4 rounded-lg  bg-base-10 w-1/2 mx-auto"
            key={_id}
          >
            <div>
              <img
                alt="photo"
                className="w-20 h-20 rounded-full object-cover"
                src={photoUrl}
              />
            </div>
            <div className="text-left mx-4">
              <h2 className="text-xl font-bold">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
