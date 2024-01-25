// import React from "react";
// import { Route } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const navigate = useNavigate();
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         if (localStorage.getItem("token")) {
//           return <Component {...props} />;
//         } else {
//           return navigate("/login");
//         }
//       }}
//     />
//   );
// };

// export default PrivateRoute;

// import React from "react";
// import { Route, Routes, Navigate } from "react-router-dom";

// const PrivateRoute = ({ element: Element, ...rest }) => {
//   if (localStorage.getItem("token")) {
//     return <Route {...rest} element={<Element />} />;
//   } else {
//     // Redirect to login if there's no valid token
//     return <Navigate to="/login" replace />;
//   }
// };

// export default PrivateRoute;

import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Element, ...rest }) => {
  if (localStorage.getItem("token")) {
    return <Route {...rest} element={<Element />} />;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default PrivateRoute;
