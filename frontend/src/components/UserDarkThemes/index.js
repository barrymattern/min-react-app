import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllUserDarkThemes } from '../../store/userThemes';

const UserDarkThemes = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(
      fetchAllUserDarkThemes(user.id)
    );
  }, [dispatch, user.id]);

  const currentUserDarkThemes = useSelector(fullReduxState => {
    return Object.values(fullReduxState.userThemes).filter(theme => {
      return theme.light === false && theme.user_id === 1;
    });
  });

  if (currentUserDarkThemes.length === 0) {
    return (
      <h3>It needs to be darker in here...</h3>
    );
  };

  return (
    <div className='themes-container'>
      {currentUserDarkThemes && currentUserDarkThemes.map((theme, idx) => {
        return (
          <div className='individual-theme' key={idx}>
            <Link to={`/user/themes/${theme.id}`}>
              <h3 className='theme-name'>{theme.name}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default UserDarkThemes;
