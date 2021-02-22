import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllThemes } from '../../store/themes';

const Themes = () => {
  const dispatch = useDispatch();

  // Persist state with logged in user
  const user = useSelector(state => state.session.user);
  const [isLoaded, setIsLoaded] = useState(false);
  const [themesArray, setThemesArray] = useState();

  // Turns object from store into an array
  const currentThemes = useSelector(fullReduxState => {
    return fullReduxState.themes;
  });

  useEffect(() => {
    setThemesArray(Object.values(currentThemes))
  }, [currentThemes]);

  useEffect(() => {
    // Request to server
    dispatch(
      fetchAllThemes() // Thunk from /store/themes.js
    ).then((res) => setIsLoaded(true));
  }, [dispatch, user]);

  // Prevents 'undefined' caused by tying to load before useEffect updates state
  // Can also use:  if (!currentThemes) return null
  // if (currentThemes == null) return null // '==' coerces null & undefined to be truthy to execute 'if' statement
  if (isLoaded && themesArray.length === 0) {
    return (
      <h3>Time to create more themes!</h3> // replace with loading gif
    );
  };

  return isLoaded && <div className='themes-container'>
      {/* {!currentThemes && <h3>Time to create more themes!</h3>} replace with loading gif */}
      {currentThemes && themesArray.map((theme, idx) => {
        return (
          <div className='individual-theme' key={idx}>
            <Link to={`/themes/${theme.id}`}>
              <h3 className="theme-name">{theme.name}</h3>
            </Link>
            {theme.Users.map((user, idx) => {
              return <p className='username' key={idx}>{user.username}</p>;
            })}
          </div>
        )
      })}
    </div>
}

export default Themes;
