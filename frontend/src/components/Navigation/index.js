import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import logo from './min.svg';
import './Navigation.css';

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div className='session-links'>
        <NavLink to="/login">
          <button id="nav-log-in">Log In</button>
        </NavLink>
        <NavLink to="/signup">
          <button id="sign-up">Sign Up</button>
        </NavLink>
      </div>
    );
  }

  return (
    <div className="navigation">
      {isLoaded && sessionLinks}
      <nav className="navbar">
        <ul>
          <li>
            <div id='min-logo'>
              <Link to="/" >
                <h2 id='min-text'>mīn</h2>
                <img src={logo} alt="mīn logo" id='min-logoMark'/>
              </Link>
            </div>
          </li>
          <li id='colorize'>
            <NavLink
              exact to="/colorize"
              activeClassName="active"
            >Colorize
            </NavLink>
          </li>
          <li id='themes'>
            <NavLink
              exact to="/themes"
              activeClassName="active"
            >Themes
            </NavLink>
          </li>
          {/* <li><NavLink exact to="/themes/light" activeClassName="active">Light</NavLink></li>
          <li><NavLink exact to="/themes/dark" activeClassName="active">Dark</NavLink></li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
