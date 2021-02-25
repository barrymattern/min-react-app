import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const UserProfile = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, [dispatch]);

  const sessionUser = useSelector(state => state.session.user);

  if (!sessionUser) return <Redirect to='/colorize' />

  return isLoaded &&
    <p>{Object.values(sessionUser)}</p>
};

export default UserProfile;
