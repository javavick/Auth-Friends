import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";

import Home from "./components/Home.js";
import Login from "./components/Login.js";
import PrivateRoute from "./components/PrivateRoute.js";
import FriendsList from "./components/FriendsList.js";
import AddFriend from "./components/AddFriend.js";

import "./App.css";

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route
        path="/login"
        render={(props) => <Login {...props} setData={setData} />}
      />
      <PrivateRoute
        path="/dashboard"
        render={() => <AddFriend setData={setData} />}
      />
      <PrivateRoute
        path="/dashboard"
        render={() => <FriendsList setData={setData} data={data} />}
      />
    </div>
  );
}

export default App;
