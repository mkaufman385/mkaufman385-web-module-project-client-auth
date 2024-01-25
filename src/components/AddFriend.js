import React from "react";

const AddFriend = () => {
  return (
    <div>
      <h2>Add Friend</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input id="name" />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input id="age" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" />
        </div>
      </form>
    </div>
  );
};

export default AddFriend;
