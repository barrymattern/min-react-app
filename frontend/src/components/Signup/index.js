import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import * as sessionActions from '../../store/session';

const SignupForm = ({ authenticated, setAuthenticated }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  if (sessionUser) return <Redirect to='/' />;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      setErrors([]);
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');

      history.push('/');

      return (
        dispatch(sessionActions.signup({ username, email, password }))
        .then(() => {
          setAuthenticated(true)
        })
        .catch(res => {
          if (res.data && res.data.errors) setErrors(res.data.errors);
        }));
    }
    return setErrors('Confirm Password field must match Password field');
  };

  return (
    <div className='form__container'>
      <h1 className='form__heading'>Sign Up</h1>
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
                placeholder="Username"
                required
              />
          </div>
          <div className='form__email'>
              <input
                className='form__input'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
          </div>
          <div className='form__password'>
              <input
                className='form__input'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
          </div>
          <div className='form__password'>
              <input
                className='form__input'
                type='password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                required
              />
          </div>
          <div className='form__submit'>
            <button className='form__button'>Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
