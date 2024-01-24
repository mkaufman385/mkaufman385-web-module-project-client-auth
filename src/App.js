import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Login = () => {
  return <h2>Login</h2>;
};

const FriendsList = () => {
  return <h2>FriendsList</h2>;
};
const AddFriend = () => {
  return <h2>AddFriend</h2>;
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Login />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/friends">
          <FriendsList />
        </Route>
        <Route path="/friends/add">
          <AddFriend />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
