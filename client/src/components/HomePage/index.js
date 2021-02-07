import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
import * as sessionActions from '../../store/session';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      sessionActions.restoreUser()
    );
  });

  return (
    <div>
      <h1>Home Page</h1>
      <p>Editor Preview</p>
      <p>Color Wheel</p>   
      <p>JSON Visualizer</p>
    </div>
  );
};

export default HomePage;
