import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUserThemes } from '../../store/userThemes';
import { Link } from 'react-router-dom';

const UserThemes = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const user = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(
      fetchAllUserThemes(user.id)
    ).then((res) => setIsLoaded(true));
  }, [dispatch, user, user.id]);

  const currentUserThemes = useSelector(fullReduxState => {
    return Object.values(fullReduxState.userThemes).filter(theme => {
      return theme.user_id === user.id;
    });
  });

  if (currentUserThemes.length === 0) {
    return (
      <h3>Go ahead, create some themes. Your eyes will thank you.</h3>
    );
  }

  return isLoaded &&
    <div className='themes-container'>
      {currentUserThemes && currentUserThemes.map((theme, idx) => {
        return (
          <div className='individual-theme' key={idx}>
            <Link to={`/user/themes/${theme.id}`}>
              <h3 className='theme-name'>{theme.name}</h3>
            </Link>
          </div>
        );
      })}
    </div>
};

export default UserThemes;
