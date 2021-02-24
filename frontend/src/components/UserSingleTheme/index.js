import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllUserThemes } from '../../store/userThemes';

const UserSingleTheme = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { themeId } = params;

  const [isLoaded, setIsLoaded] = useState(false);
  const [isDispatched, setIsDispatched] = useState(false);
  const [currentTheme, setCurrentTheme] = useState();

  useEffect(() => {
    setIsLoaded(true);
  }, [dispatch]);

  useSelector(state => state.session.user);

  const allUserThemes = useSelector(fullReduxState => {
    return fullReduxState.userThemes;
  });

  useEffect(() => {
    if (allUserThemes[themeId]) { // Looks in current store
      setCurrentTheme(allUserThemes[themeId]);
      setIsLoaded(true);
    } else if (!isDispatched) { // If no theme, send backend request to get all themes
      dispatch(
        fetchAllUserThemes()
      ).then((res) => setIsDispatched(true)); // Avoids running request multiple times
    }
  }, [dispatch, themeId, allUserThemes, isDispatched]);

  if (!currentTheme) return null;

  return isLoaded &&
    <div className='individual-theme'>
      <h3 className='theme-name'>
        {currentTheme.name}
      </h3>
    </div>
};

export default UserSingleTheme;
