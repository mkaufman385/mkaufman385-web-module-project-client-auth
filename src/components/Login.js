import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
// import { useNavigate as useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [cred, setCred] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/login", cred)
      .then((resp) => {
        console.log("RESP:", resp);
        localStorage.setItem("token", resp.data.token);
        // console.log("Response: ", resp.data);
        console.log("handleSubmit");
        navigate("/friends");
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  const handleChange = (e) => {
    setCred({
      ...cred,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input onChange={handleChange} name="username" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            onChange={handleChange}
            name="password"
            type="password"
            id="password"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
