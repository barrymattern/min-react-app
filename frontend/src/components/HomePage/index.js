import React from 'react';
import TextEditor from "../TextEditor";
import './HomePage.css';

const HomePage = () => {
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


  return (
    <div className='themeGenerator__wrapper'>
      <TextEditor originalColorState={originalColors} />
    </div>
  );
};

export default HomePage;
