import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to='/colorize' />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    return dispatch(sessionActions.login({ username, email, password }))
      .then(() => {
        setAuthenticated(true)
      })
      .catch((res) => {
        if (res.data && res.data.error.errors) setErrors(res.data.error.errors);
      });
  };

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    return dispatch(sessionActions.login({
      username: 'demo',
      email: 'demo@demo.com',
      password: 'password',
    }))
    .then(() => {
      setAuthenticated(true)
    })
    .catch((res) => {
      if (res.data && res.data.error.errors) setErrors(res.data.error.errors);
    });
  };

  return (
    <div className='form__container'>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form__list-container'>
          <ul className='form__list'>
            {errors.map((error, idx) => (
              <li className='form__list--error' key={idx}>{error}</li>
            ))}
          </ul>
        </div>
        <div className='form__input-container'>
          <div className='form__username'>
            <input
              className='form__input'
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Username'
              required
            />
          </div>
          <div className='form__email'>
            <input
              className='form__input'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              required
            />
          </div>
          <div className='form__password'>
            <input
              className='form__input'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              required
            />
          </div>
          <div className='form__submit'>
            <div className='form__button-container'>
              <button className='form__button'>Log In</button>
            </div>
            <div className='form__button-container'>
              <button
                className='form__button'
                onClick={handleDemoSubmit}  
              >Demo</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
