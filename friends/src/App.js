import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axiosWithAuth from "./auth/axiosWithAuth.js";

import Login from "./components/Login.js";
import PrivateRoute from "./components/PrivateRoute.js";
import FriendsList from "./components/FriendsList.js";
import AddFriend from "./components/AddFriend.js";

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
      <Route path="/login" component={Login} />
      <PrivateRoute
        path="/dashboard"
        render={() => <AddFriend setData={setData} />}
      />
      <PrivateRoute
        path="/dashboard"
        render={() => <FriendsList data={data} />}
      />
    </div>
  );
}

export default App;
