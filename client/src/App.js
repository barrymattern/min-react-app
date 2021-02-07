import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
// import UserList from "./components/UsersList";
import Login from "./components/Login";
import Themes from "./components/Themes";
import LightThemes from "./components/LightThemes";
import DarkThemes from "./components/DarkThemes";
import SingleTheme from "./components/SingleTheme";

function App() {

  return (
    <BrowserRouter>
      <nav className="navbar">
        <ul>
          <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
          <li><NavLink to="/themes" activeClassName="active">Themes</NavLink></li>
          <li><NavLink to="/themes/light" activeClassName="active">Light</NavLink></li>
          <li><NavLink to="/themes/dark" activeClassName="active">Dark</NavLink></li>
        </ul>
      </nav>
      <Switch>
        {/* <Route path="/users">
            <UserList />
        </Route> */}

        <Route exact path="/">
          <h1>Home Page</h1>
          <p>Editor Preview</p>
          <p>Color Wheel</p>   
          <p>JSON Visualizer</p>
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/themes">
          <Themes />
        </Route>

        <Route exact path="/themes/light">
          <LightThemes />
        </Route>

        <Route exact path="/themes/dark">
          <DarkThemes />
        </Route>

        <Route exact path="/themes/:themeId">
          <SingleTheme />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
