import React, { useState, useEffect } from "react";
import Friend from "./Friend.js";

const FriendsList = (props) => {
  const [wasDataFetched, setWasDataFetched] = useState(false);

  useEffect(() => {
    if (props.data.length !== 0) {
      setWasDataFetched(true);
    }
  }, [props.data]);

  console.log("test");

  return wasDataFetched ? (
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
  ) : (
    <p>FETCHING DATA</p>
  );
};

export default FriendsList;
