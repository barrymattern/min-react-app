import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUserThemes } from '../../store/userThemes';
import { Link } from 'react-router-dom';

const UserThemes = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(
      fetchAllUserThemes(user.id)
    );
  }, [dispatch, user.id]);

  const currentUserThemes = useSelector(fullReduxState => {
    return Object.values(fullReduxState.userThemes);
  });

  if (currentUserThemes.length === 0) return null;

  return (
    <div className='themes-container'>
      {!currentUserThemes &&
        <h3>Go ahead, create some themes. Your eyes will thank you.</h3>}
      {currentUserThemes && currentUserThemes.map((theme, idx) => {
        return (
          <div className='individual-theme' key={idx}>
            <Link to={`/themes/${theme.id}`}>
              <h3 className='theme-name'>{theme.name}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default UserThemes;
