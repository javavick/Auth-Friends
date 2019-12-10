import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axiosWithAuth from "./auth/axiosWithAuth.js";

import Login from "./components/Login.js";
import FriendsList from "./components/FriendsList.js";

import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <FriendsList data={data} />
    </div>
  );
}

export default App;
