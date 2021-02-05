import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
// import UserList from "./components/UsersList";
import Themes from './components/Themes';


function App() {

  return (
    <BrowserRouter>
        <nav>
            <ul>
                <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/themes" activeClassName="active">Themes</NavLink></li>
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

            <Route exact path="/themes">
              <Themes />
            </Route>

            <Route exact path="/themes/:themeId">
              <OneTheme />
            </Route>

        </Switch>
    </BrowserRouter>
  );
}

export default App;
