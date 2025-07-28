import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../Utils/constants";
const Login = () => {
  const [emailId, setEmailId] = useState("Renisha@gmail.com");
  const [Password, setPassword] = useState("@Renisha144");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setEmailId(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password: Password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card card-border bg-base-300 w-96 shadow-2xl">
        <div className="card-body">
          <h2 className="card-title flex justify-center">Login</h2>
          <div>
            <label className="form-control w-full max-w-xs my-4">
              <div className="label">
                <span className="label-text">What is your Email?{emailId}</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                value={emailId}
                onChange={handleChange}
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Password?</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
