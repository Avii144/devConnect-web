import React from "react";
import { BASE_URL } from "../Utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../Utils/feedSlice";

function UserCard({ user }) {
  const dispatch = useDispatch();
  const { _id, firstName, lastName, emailId, age, gender, photoUrl, about } =
    user;
  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {}
  };

  return (
    <div className="card pb-[20%] bg-base-90 w-96 shadow-sm">
      <figure>
        <img src={photoUrl} alt="user" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {firstName} {lastName}
        </h2>
        <p>{emailId}</p>
        <p>{age + " " + gender}</p>
        <p>{about}</p>
        <div className="card-actions justify-center my-4">
          <button
            className="btn btn-secondary"
            onClick={() => handleSendRequest("ignored", _id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleSendRequest("interested", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
