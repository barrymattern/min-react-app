import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import { fetchAllThemes } from '../../store/themes';

const Theme = () => {
  const dispatch = useDispatch();
  // const params = useParams();
  // const { themeId } = params;

  useEffect(() => {
    // Request to server
    dispatch(
      fetchAllThemes() // Thunk from /store/themes.js
    );
  }, [dispatch]);

  // Turns object from store into an array
  const currentThemes = useSelector(fullReduxState => {
    return Object.values(fullReduxState.themes);
  });

  // Prevents 'undefined' caused by tying to load before useEffect updates state
  if (currentThemes == null) return null; // '==' coerces null & undefined to be truthy to execute if statement

  return (
    <div className='themes-container'>
      {!currentThemes && <h3>Time to create more themes!</h3>} {/* replace with loading gif */}
      {currentThemes && currentThemes.map((theme, idx) => {
        return (
          <div className='individual-theme' key={idx}>
            <Link to={`/themes/${theme.id}`}>
              <h3>{theme.id}</h3>
            </Link>
            {theme.Users.map((user, idx) => {
              return <p key={idx}>{user.username}</p>;
            })}
          </div>
        )
      })}
    </div>
  );
}

export default Theme;
