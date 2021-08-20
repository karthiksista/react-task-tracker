import React, { useState } from "react";
import { Navbar, NavbarText } from "reactstrap";

import profile from "./images/profile.jpeg";
import { Redirect } from "react-router-dom";

const NavbBar = ({ value }) => {
  const [loggedOut, setLoggedOut] = useState(false);
  const logout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("jwt");
    localStorage.removeItem("isAuthorized");
    setLoggedOut(true);
  };

  if (loggedOut) {
    return <Redirect to="/" push={true} />;
  }

  return (
    <div className="nav-bar">
      <Navbar expand="md" fixed="true">
        <div className="avatar">
          <img className="avatar" src={profile} alt="profile" />
          <span className="user-name">{value}</span>
        </div>
        <NavbarText
          onClick={() => {
            logout();
          }}
        >
          Log Out
        </NavbarText>
      </Navbar>
    </div>
  );
};

export default NavbBar;
