import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchAllThemes, getSingleTheme } from '../../store/themes';

const SingleTheme = () => {
  const dispatch = useDispatch();
  const params = useParams(); // Returns obj
  const { themeId } = params; // Destructure params obj to get themeId key

  useEffect(() => {
    dispatch(
      fetchAllThemes()
    );
  });
  
  // useEffect(() => {
  //   dispatch(
  //     getSingleTheme()
  //   );
  // }, [themeId]); // Run every time new theme is selected

  // Turns object from store into an array
  const currentTheme = useSelector(fullReduxState => {
    const allThemes = Object.values(fullReduxState.themes);
    const singleTheme = allThemes[themeId - 1];
    console.log(singleTheme);
    return singleTheme;
  });

  // Prevents 'undefined' caused by tying to load before useEffect updates state
  // Can also use:  if (!currentThemes) return null
  if (currentTheme == null) return null; // '==' coerces null & undefined to be truthy to execute 'if' statement

  return <h1>{currentTheme.id}</h1>
};

export default SingleTheme;
