import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';

const SignupForm = () => {
  const dispatch = useDispatch();
  const sessionLinks = useSelector((state) => state.session.user);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');


  return (
    <h1>Signup!!</h1>
  );
};

export default SignupForm;
