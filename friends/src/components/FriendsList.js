import React from "react";

import Friend from "./Friend.js";

const FriendsList = (props) => {
  return (
    <div>
      {props.data.map((item) => {
        return (
          <Friend
            key={item.id}
            name={item.name}
            age={item.age}
            email={item.email}
          />
        );
      })}
    </div>
  );
};

export default FriendsList;
