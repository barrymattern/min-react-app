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
      fetchAllThemes() // Thunk from themes.js
    );
  }, [dispatch]);

  const currentThemes = useSelector(fullReduxState => {
    return fullReduxState.themes.all;
  });

  return (
    <div className='themes-container'>
      {!currentThemes && <h3>Time to create more themes!</h3>} {/* replace with loading gif */}
      {currentThemes && currentThemes.map((theme, idx) => {
        return <li>{theme.id}</li>
      })}
    </div>
  );
};

export default Theme;
