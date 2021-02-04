import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllThemes } from '../../store/themes';

const Theme = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { themeId } = params;

  useEffect(() => {
    // Request to server
    dispatch(
      fetchAllThemes() // Thunk from themes.js
    );
  }, [dispatch]);

  return (
    <h1>All Themes!</h1>
  );
};

export default Theme;
