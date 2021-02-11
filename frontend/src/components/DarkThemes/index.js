import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllDarkThemes } from '../../store/themes';

const DarkThemes = () => {
  const dispatch = useDispatch();

  useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(
      fetchAllDarkThemes()
    );
  }, [dispatch]);

  const currentDarkThemes = useSelector(fullReduxState => {
    return Object.values(fullReduxState.themes).filter(theme => {
      return theme.light === false;
    });
  });

  if (currentDarkThemes.length === 0) return null;

  return (
    <div className='themes-container'>
      {!currentDarkThemes && <h3>It needs to be darker in here...</h3>}
      {currentDarkThemes && currentDarkThemes.map((theme, idx) => {
        return (
          <div className='individual-theme' key={idx}>
            <Link to={`/themes/${theme.id}`}>
              <h3 className='theme-name'>{theme.name}</h3>
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

export default DarkThemes;
