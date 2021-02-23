import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as sessionActions from '../../store/session';

const ProfileButton = ({ authenticated, user }) => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener('click', closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    window.location.href = '/'; // Redirect to home page on logout
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button onClick={openMenu}>Profile</button>
      {showMenu && (
        <div className='profile__dropdown'>
          <ul className='profile__dropdown--content'>
            <Link to='/user/themes'>
              <li className='profile__dropdown--menuitem'>Themes</li>
            </Link>
            <Link to='/user/profile'>
              <li className='profile__dropdown--menuitem'>Account</li>
            </Link>
            {/* <li className='profile__dropdown--user'> 
              <Link to='/user/profile'> Logged in as {user.username}</Link>
            </li> */}
            {/* <Link to='/user/themes/light'>
              <li>My Light Themes</li>
            </Link>
            <Link to='/user/themes/dark'>
              <li>My Dark Themes</li>
            </Link> */}
            <li id='profile__dropdown--logout'>
              <button onClick={logout}>Log Out</button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default ProfileButton;
