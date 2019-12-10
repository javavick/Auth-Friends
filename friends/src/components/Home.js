import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Welcome to Friends!</h1>
      <Link to="/login">Login</Link>
    </>
  );
};

export default Home;
