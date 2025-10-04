import React, { useEffect } from "react";
import { BASE_URL } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addRequest } from "../Utils/requestSLice";

const Requests = () => {
  const dispatch = useDispatch();

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequest(res.data.data));
    } catch (error) {}
  };
  useEffect(() => {
    fetchRequests();
  }, []);
  return <div> Requests</div>;
};

export default Requests;
