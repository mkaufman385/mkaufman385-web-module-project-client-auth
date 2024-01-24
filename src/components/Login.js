import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/login");
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input id="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input id="password" />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Login;
