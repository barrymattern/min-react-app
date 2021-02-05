import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

  const currentThemes = useSelector(fullReduxState => {
    return fullReduxState.themes.themes;
  });

  // Prevents 'undefined' caused by tying to load before useEffect updates state
  if (currentThemes === undefined) return null;

  return (
    <div className='themes-container'>
      {!currentThemes && <h3>Time to create more themes!</h3>} {/* replace with loading gif */}
      {currentThemes && currentThemes.map((theme, idx) => {
        return (
          <>
            <h3>{theme.id}</h3>
            <p>{theme.Users.map((user, idx) => {
              return user.username;
            })}</p>
          </>
        )
      })}
    </div>
  );
}

export default Theme;
