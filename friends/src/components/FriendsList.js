import React, { useState, useEffect } from "react";
import Friend from "./Friend.js";
import axiosWithAuth from "../auth/axiosWithAuth.js";

const FriendsList = (props) => {
  const [wasDataFetched, setWasDataFetched] = useState(false);

  useEffect(() => {
    if (props.data.length !== 0) {
      setWasDataFetched(true);
    }
  }, [props.data]);

  if (props.data.length === 0) {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        console.log(res.data);
        props.setData(res.data);
      })
      .catch((err) => console.log(err));
  }

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
