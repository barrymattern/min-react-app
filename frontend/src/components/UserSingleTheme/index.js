import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleUserTheme } from '../../store/userThemes';

const UserSingleTheme = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { themeId } = params;

  useSelector(state => state.session.user);

  const allUserThemes = useSelector(fullReduxState => {
    return fullReduxState.userThemes;
  });

  useEffect(() => {
    if (allUserThemes[themeId]) return;
    dispatch(
      fetchSingleUserTheme(themeId)
    );
  }, [dispatch, themeId, allUserThemes]);

  if (!allUserThemes[themeId]) return null;

  return (
    <div className='individual-theme'>
      <h3 className='theme-name'>
        {allUserThemes[themeId].name}
      </h3>
    </div>
  );
};

export default UserSingleTheme;
