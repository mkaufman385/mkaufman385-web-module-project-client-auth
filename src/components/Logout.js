// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Logout = () => {
//   const navigate = useNavigate();
//   useEffect(() => {
//     const token = localStorage.getItem("Token");
//     console.log("useEffect for token", token);
//     axios
//       .post(
//         "http://localhost:9000/api/logout",
//         {},
//         {
//           headers: {
//             authorization: token,
//           },
//         }
//       )
//       .then((res) => {
//         localStorage.removeItem("Token");
//         navigate("/login");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   return <div></div>;
// };

// export default Logout;

import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  // Clear the token from localStorage
  localStorage.removeItem("token");

  // Navigate to the login page
  navigate("/login");

  return null; // Render nothing since the navigation is handled
};

export default Logout;
