import React from "react";

const Friend = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
    </div>
  );
};

export default Friend;
