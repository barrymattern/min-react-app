import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import Login from "../Login";

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    if (!<Login />) {

    }
    sessionLinks = (
      <>
        {/* <Login /> */}
        <NavLink to="/login">
          <button id="nav-log-in">Log In</button>
        </NavLink>
        <NavLink to="/signup">
          <button id="sign-up">Sign Up</button>
        </NavLink>
      </>
    );
  }

  return (
    <div className="navigation">
      {isLoaded && sessionLinks}
      <nav className="navbar">
        <ul>
          <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink exact to="/themes" activeClassName="active">Themes</NavLink></li>
          <li><NavLink exact to="/themes/light" activeClassName="active">Light</NavLink></li>
          <li><NavLink exact to="/themes/dark" activeClassName="active">Dark</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
