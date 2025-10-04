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
      dispatch(addConnections(res.data.data));
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
    <div className="flex justify-center my-10">
      <h1 className="text-xl font-bold">Connections</h1>
      <div>
        {connections.map((connection) => {
          const { firstName, lastName, age, gender, photoUrl, about } =
            connection;
          return (
            <div
              className="m-4 p-4 rounded-lg  bg-base-10"
              key={connection.age}
            >
              <img alt="photo" src={photoUrl} />
              <p>{firstName + " " + lastName}</p>
              <p>{age + " " + gender}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Connections;
