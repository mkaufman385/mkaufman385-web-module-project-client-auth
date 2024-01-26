import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  let userId = localStorage.getItem("Token") !== null ? false : true;
  console.log("user", userId);
  return <>{userId ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
