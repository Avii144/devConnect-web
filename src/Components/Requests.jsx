import React, { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../Utils/requestSlice.js";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();
  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res.data.data));
    } catch (error) {}
  };
  useEffect(() => {
    fetchRequests();
  }, []);
  if (!requests) return;
  if (requests.length === 0) return <h1>No request found</h1>;

  return (
    <div className="flex justify-center my-10">
      <div>
        {requests.map((request) => {
          const { firstName, lastName, age, gender, photoUrl, about } =
            request.fromUserId;
          return (
            <div className="m-4 p-4 rounded-lg  bg-base-10" key={request.age}>
              <img alt="photo" src={photoUrl} />
              <p>{firstName + " " + lastName}</p>
              <div>
                <button className="btn btn-soft btn-primary mx-2">
                  Reaject
                </button>
                <button className="btn btn-soft btn-secondary mx-2">
                  Accept
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Requests;
