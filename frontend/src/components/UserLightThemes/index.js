import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllUserLightThemes } from '../../store/userThemes';

const UserLightThemes = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(
      fetchAllUserLightThemes(user.id)
    );
  }, [dispatch, user, user.id]);

  const currentUserLightThemes = useSelector(fullReduxState => {
    return Object.values(fullReduxState.userThemes).filter(theme => {
      return theme.light === true && theme.user_id === user.id;
    });
  });

  if (currentUserLightThemes.length === 0) {
    return (
      <h3>Maybe light themes were too bright??</h3>
    );
  }

  return (
    <div className='themes-container'>
      {currentUserLightThemes && currentUserLightThemes.map((theme, idx) => {
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

export default UserLightThemes;
