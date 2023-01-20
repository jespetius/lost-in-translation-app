import { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import Login from "./views/Login";
import Orders from "./views/Translation";
import Profile from "./views/Profile";
function App() {
  const key = process.env.REACT_APP_API_KEY;
  return (
 
      <div className="App">
        <Outlet />
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
   
  );
}
export default App;
