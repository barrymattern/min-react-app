import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { restoreUser } from '../../store/session';
import { fetchAllLightThemes } from '../../store/themes';

const LightThemes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      restoreUser()
    );
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      fetchAllLightThemes()
    );
  }, [dispatch]);

  const currentLightThemes = useSelector(fullReduxState => {
    return Object.values(fullReduxState.themes).filter((theme) => {
      return theme.light === true; // Returns new array with true elements
    });
  });
  
  if (currentLightThemes.length === 0) return null;

  return (
    <div className='themes-container'>
      {!currentLightThemes && <h3>Maybe light themes were too bright??</h3>}
      {currentLightThemes && currentLightThemes.map((theme, idx) => {
        return (
          <div className='individual-theme' key={idx}>
            <Link to={`/themes/${theme.id}`}>
              <h3 className="theme-name">{theme.name}</h3>
            </Link>
            {theme.Users.map((user, idx) => {
              return <p className='username' key={idx}>{user.username}</p>
            })}
          </div>
        );
      })}
    </div>
  );  
};

export default LightThemes;
