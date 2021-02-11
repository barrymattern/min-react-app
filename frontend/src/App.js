import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ProtectedRoute from "./components/ProtectedRoute";
// import UserList from "./components/UsersList";
import Signup from "./components/Signup";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Themes from "./components/Themes";
import LightThemes from "./components/LightThemes";
import DarkThemes from "./components/DarkThemes";
import SingleTheme from "./components/SingleTheme";
import UserProfile from "./components/UserProfile";
import UserThemes from "./components/UserThemes";
import UserLightThemes from "./components/UserLightThemes";
import UserDarkThemes from "./components/UserDarkThemes";
import UserSingleTheme from "./components/UserSingleTheme";

function App() {
  const dispatch = useDispatch();
  const [authenticated, setAuthenticated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => (setIsLoaded(true)));
  }, [dispatch]);

  if (!isLoaded) return null;

  return (
    <BrowserRouter>

      <Navigation isLoaded={isLoaded} setAuthenticated={setAuthenticated}/>
      {isLoaded && (
        <Switch>

          <Route exact path="/signup">
            <Signup />
          </Route>

          <Route exact path="/login">
            <Login
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
          </Route>

          <Route exact path="/">
            <HomePage />
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

          <ProtectedRoute exact path="/user/profile" authenticated={authenticated}>
            <UserProfile />
          </ProtectedRoute>

          <ProtectedRoute exact path="/user/themes" authenticated={authenticated}>
            <UserThemes />
          </ProtectedRoute>

          <ProtectedRoute exact path="/user/themes/light" authenticated={authenticated}>
            <UserLightThemes />
          </ProtectedRoute>

          <ProtectedRoute exact path="/user/themes/dark" authenticated={authenticated}>
            <UserDarkThemes />
          </ProtectedRoute>

          <ProtectedRoute exact path="/user/themes/:themeId" authenticated={authenticated}>
            <UserSingleTheme />
          </ProtectedRoute>

        </Switch>
      )}
      
    </BrowserRouter>
  );
}

export default App;
