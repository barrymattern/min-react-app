import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUserThemes } from '../../store/userThemes';
import { Link } from 'react-router-dom';
import MiniTextEditor from '../MiniTextEditor';

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
      <h3 className='empty-page'>Go ahead, create some themes. Your eyes will thank you.</h3>
    );
  }

  return isLoaded &&
    <div className='themes-container'>
      {currentUserThemes && currentUserThemes.map((theme, idx) => {
        let {
          commentColor,
          funcKeywordColor,
          funcNameColor,
          roundBraceColor,
          parameterColor,
          curlyBraceColor,
          letConstColor,
          variableColor,
          operatorColor,
          numberColor,
          punctuationColor,
          fatArrowColor,
          methodColor,
          stringColor,
        } = theme;
        return (
          <div className='individual-theme' key={idx}>
            <Link to={`/user/themes/${theme.id}`}>
              <h3 className='theme-name'>{theme.name}</h3>
            </Link>
            <MiniTextEditor 
              commentColor={commentColor}
              funcKeywordColor={funcKeywordColor}
              funcNameColor={funcNameColor}
              roundBraceColor={roundBraceColor}
              parameterColor={parameterColor}
              curlyBraceColor={curlyBraceColor}
              letConstColor={letConstColor}
              variableColor={variableColor}
              operatorColor={operatorColor}
              numberColor={numberColor}
              punctuationColor={punctuationColor}
              fatArrowColor={fatArrowColor}
              methodColor={methodColor}
              stringColor={stringColor}
            />
          </div>
        );
      })}
    </div>
};

export default UserThemes;
