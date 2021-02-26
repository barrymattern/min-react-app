import React from 'react';
import MiniTextEditor from '../MiniTextEditor';
import './SplashPage.css';

const SplashPage = () => {
  const deepFreeze = {
    commentColor: '#255288',
    funcKeywordColor: '#61beff',
    funcNameColor: '#218DF3',
    roundBraceColor: '#61beff',
    parameterColor: '#99D5FF',
    curlyBraceColor: '#61beff',
    letConstColor: '#61beff',
    variableColor: '#99D5FF',
    operatorColor: '#61beff',
    numberColor: '#FF4517',
    punctuationColor: '#218DF3',
    fatArrowColor: '#FF4517',
    methodColor: '#FF9B82',
    stringColor: '#61beff',
  };

  return (
    <div className='splash__wrapper'>
      <div id='color-text'>
        <h1>Color.</h1>
        <p>It's everywhere – now create it in your code!</p>
      </div>
      <div id='mini-editor'>
        <div id='shadow'></div>
        <div id='editor'>
          <MiniTextEditor 
            commentColor={deepFreeze.commentColor}
            funcKeywordColor={deepFreeze.funcKeywordColor}
            funcNameColor={deepFreeze.funcNameColor}
            roundBraceColor={deepFreeze.roundBraceColor}
            parameterColor={deepFreeze.parameterColor}
            curlyBraceColor={deepFreeze.curlyBraceColor}
            letConstColor={deepFreeze.letConstColor}
            variableColor={deepFreeze.variableColor}
            operatorColor={deepFreeze.operatorColor}
            numberColor={deepFreeze.numberColor}
            punctuationColor={deepFreeze.punctuationColor}
            fatArrowColor={deepFreeze.fatArrowColor}
            methodColor={deepFreeze.methodColor}
            stringColor={deepFreeze.stringColor}
          />
        </div>
      </div>
      <div id='pic-fade'></div>
      <div className='splash__cityScape-banner'></div>
    </div>
  );
};

export default SplashPage;
