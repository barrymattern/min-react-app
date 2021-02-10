import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const UserProfile = () => {

  const sessionUser = useSelector(state => state.session.user);

  if (!sessionUser) return <Redirect to='/' />

  return (
    <p>{Object.values(sessionUser)}</p>
  );
};

export default UserProfile;
