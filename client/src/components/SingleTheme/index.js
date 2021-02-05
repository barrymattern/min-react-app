import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchAllThemes } from '../../store/themes';

const SingleTheme = () => {
  const dispatch = useDispatch();
  const params = useParams(); // Returns obj
  const { themeId } = params; // Destructure params obj to get themeId key

  useEffect(() => {
    dispatch(
      fetchAllThemes()
    );
  }, [dispatch]);

  // Turns object from store into an array
  const currentTheme = useSelector(fullReduxState => {
    const allThemes = Object.values(fullReduxState.themes);
    const singleTheme = allThemes[themeId - 1];
    return singleTheme;
  });

  // Prevents 'undefined' caused by tying to load before useEffect updates state
  // Can also use:  if (!currentThemes) return null
  if (currentTheme == null) return null; // '==' coerces null & undefined to be truthy to execute 'if' statement

  return (
    <div className='individual-theme'>
      <h3 className='theme-id'>
        {currentTheme.id}
      </h3>
        {currentTheme.Users.map((user, idx) => {
          return <p className='username' key={idx}>{user.username}</p>;
        })}
    </div>
  );
};

export default SingleTheme;
