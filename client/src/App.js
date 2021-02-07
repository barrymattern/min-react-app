import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
// import UserList from "./components/UsersList";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Themes from "./components/Themes";
import LightThemes from "./components/LightThemes";
import DarkThemes from "./components/DarkThemes";
import SingleTheme from "./components/SingleTheme";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <BrowserRouter>

      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
        
          {/* <Route path="/users">
              <UserList />
          </Route> */}

          <Route exact path="/">
            <HomePage />
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
      )}
      
    </BrowserRouter>
  );
}

export default App;

