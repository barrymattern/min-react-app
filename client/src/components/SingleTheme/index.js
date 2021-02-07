import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { restoreUser } from '../../store/session';
import { fetchSingleTheme } from '../../store/themes';

const SingleTheme = () => {
  const dispatch = useDispatch();
  const params = useParams(); // Returns obj
  const { themeId } = params; // Destructure params obj to get themeId key

  const allThemes = useSelector(fullReduxState => {
    return fullReduxState.themes;
  });

  useEffect(() => {
    dispatch(
      restoreUser()
    );
  }, [dispatch]);
  
  useEffect(() => {
    if (allThemes[themeId]) return;
    dispatch(
      fetchSingleTheme(themeId)
    );
  }, [dispatch, themeId, allThemes]);

  // Prevents 'undefined' caused by tying to load before useEffect updates state
  // Can also use:  if (!currentThemes) return null
  if (!allThemes[themeId]) return null; // '==' coerces null & undefined to be truthy to execute 'if' statement

  return (
    <div className='individual-theme'>
      <h3 className='theme-name'>
        {allThemes[themeId].name}
      </h3>
        {allThemes[themeId].Users.map((user, idx) => {
          return <p className='username' key={idx}>{user.username}</p>;
        })}
    </div>
  );
};

export default SingleTheme;
