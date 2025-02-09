import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Outlet,
  Link,
} from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import Logout from "./components/Logout";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <header>
        <h2>Friends Database</h2>
        <Link className="link" to="/login">
          Login
        </Link>
        <Link className="link" to="/friends">
          Friends List
        </Link>
        <Link className="link" to="/friends/add">
          Add Friends
        </Link>
        <Link className="link" to="/logout">
          Logout
        </Link>
      </header>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route exact path="/friends" element={<FriendsList />} />
          <Route exact path="/friends/add" element={<AddFriend />} />
          <Route exact path="/logout" element={<Logout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

{
  /* <Route
          path="/friends"
          element={
            <PrivateRoute>
              <FriendsList />
            </PrivateRoute>
          }
        />
        <Route path="/friends/add" element={<AddFriend />} />
        <Route path="/logout" element={<Logout />} /> */
}

// MY CODE I REMOVED
{
  /* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/friends"
          element={
            <PrivateRoute>
              <FriendsList />
            </PrivateRoute>
          }
        />

        <Route path="/friends/add" element={<AddFriend />} />
        <Route path="/logout" element={<Logout />} />
      </Routes> */
}
