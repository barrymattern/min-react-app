import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./components/Signup";
import Login from "./components/Login";
import SplashPage from "./components/SplashPage";
import Colorize from "./components/Colorize";
import Themes from "./components/Themes";
import SingleTheme from "./components/SingleTheme";
import UserProfile from "./components/UserProfile";
import UserThemes from "./components/UserThemes";
import UserSingleTheme from "./components/UserSingleTheme";
import Footer from '../src/components/Footer';
import NotFound from "./components/NotFound";

function App() {
  const dispatch = useDispatch();

  const [authenticated, setAuthenticated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(
      sessionActions.restoreUser())
      .then(() => (setIsLoaded(true)));
  }, [dispatch]);

  if (!isLoaded) return null;

  return (
    <BrowserRouter>

      <Navigation isLoaded={isLoaded} setAuthenticated={setAuthenticated}/>
      {isLoaded && (
        <Switch>

          <Route exact path="/signup">
            <Signup
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
          </Route>

          <Route exact path="/login">
            <Login
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
          </Route>

          <Route exact path='/' >
            <SplashPage />
          </Route>

          <Route exact path="/colorize">
            <Colorize />
          </Route>

          <Route exact path="/themes">
            <Themes />
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

          <ProtectedRoute exact path="/user/themes/:themeId" authenticated={authenticated}>
            <UserSingleTheme />
          </ProtectedRoute>

          <Route>
            <NotFound />
          </Route>

        </Switch>
      )}
      {/* Remove div? */}
      <div>
        <Footer />
      </div>
      
    </BrowserRouter>
  );
}

export default App;
