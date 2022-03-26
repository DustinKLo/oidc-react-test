import React from "react";

import {
  Route,
  BrowserRouter as Router,
  Routes,
  NavLink,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import User from "./pages/User";
import Claims from "./pages/Claims";

import { userMgr } from "./auth";

export default function () {
  const linkStyle = {
    marginLeft: 5,
    marginRight: 5,
  };

  const logoutStyle = {
    fontSize: 15,
    marginLeft: 10,
  };

  return (
    <div style={{ padding: 10 }}>
      <Router>
        <span style={linkStyle}>
          <NavLink to="/">Home</NavLink>
        </span>
        <span style={linkStyle}>
          <NavLink to="/user">Users</NavLink>
        </span>
        <span style={linkStyle}>
          <NavLink to="/claims">Claims</NavLink>
        </span>
        <button style={logoutStyle} onClick={() => userMgr.signoutRedirect()}>
          Logout
        </button>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/claims" element={<Claims />} />
          <Route path="/*" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}
