import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TextEditor from "../TextEditor";
import './Colorize.css';

const Colorize = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, [dispatch]);

  const originalColors = {
    commentColor: '#6A9955',
    funcKeywordColor: '#569CD6',
    funcNameColor: '#DCDCAA',
    roundBraceColor: '#d4d4d4',
    parameterColor: '#9CDCFE',
    curlyBraceColor: '#d4d4d4',
    letConstColor: '#569CD6',
    variableColor: '#9CDCFE',
    operatorColor: '#d4d4d4',
    numberColor: '#B5CEA8',
    punctuationColor: '#d4d4d4',
    fatArrowColor: '#569CD6',
    methodColor: '#DCDCAA',
    stringColor: '#CE9178',
  };

  return isLoaded &&
    <div>
      <div className='themeGenerator__wrapper'>
        <TextEditor originalColorState={originalColors} />
      </div>
    </div>
};

export default Colorize;
