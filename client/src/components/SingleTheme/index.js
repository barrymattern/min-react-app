import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleTheme } from '../../store/themes';

const SingleTheme = () => {
  const dispatch = useDispatch();
  const params = useParams(); // Returns obj
  const { themeId } = params; // Destructure params obj to get themeId key

  const allThemes = useSelector(fullReduxState => {
    console.log(fullReduxState, 'FULL STATE');
    return fullReduxState.themes;
  });

  console.log(allThemes, '!!!!!!!!!!!!!');
  
  useEffect(() => {
    if (allThemes[themeId]) return;
    dispatch(
      fetchSingleTheme(themeId)
    );
  }, [dispatch, themeId]);

  // Prevents 'undefined' caused by tying to load before useEffect updates state
  // Can also use:  if (!currentThemes) return null
  if (!allThemes[themeId]) return null; // '==' coerces null & undefined to be truthy to execute 'if' statement

  return (
    <div className='individual-theme'>
      <h3 className='theme-id'>
        {allThemes[themeId].id}
      </h3>
        {allThemes[themeId].Users.map((user, idx) => {
          return <p className='username' key={idx}>{user.username}</p>;
        })}
    </div>
  );
};

export default SingleTheme;
