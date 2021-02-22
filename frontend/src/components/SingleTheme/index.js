import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllThemes } from '../../store/themes';

const SingleTheme = () => {
  const dispatch = useDispatch();
  const params = useParams(); // Returns obj
  const { themeId } = params; // Destructure params obj to get themeId key
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDispatched, setIsDispatched] = useState(false);
  const [currentTheme, setCurrentTheme] = useState();

  // Persist state with logged in user
  useSelector(state => state.session.user);

  const allThemes = useSelector(fullReduxState => {
    return fullReduxState.themes;
  });
  
  useEffect(() => {
    if (allThemes[themeId]) { // Looks in current store
      setCurrentTheme(allThemes[themeId]);
      setIsLoaded(true);
    } else if (!isDispatched) { // If no theme, send backend request to get all themes
      dispatch(
        fetchAllThemes()
      ).then((res) => setIsDispatched(true)); // Avoids running request multiple times
    }
  }, [dispatch, themeId, allThemes, isDispatched]);

  // Prevents 'undefined' caused by trying to load before useEffect updates state
  if (!currentTheme) return null;

  return isLoaded &&
    <div className='individual-theme'> 
      <h3 className='theme-name'>
        {currentTheme.name}
      </h3>
      {currentTheme.Users.map((user, idx) => {
        return <p className='username' key={idx}>{user.username}</p>;
      })}
    </div>
};

export default SingleTheme;
