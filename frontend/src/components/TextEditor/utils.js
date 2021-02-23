import { replaceHexColor } from './themeJson';

// Allow file download in browser **********************************************
export const downloadFile = (filename, data) => {
  const blob = new Blob([data], {type: 'text/csv'});
  
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveBlob(blob, filename);
  } else {
    const elem = window.document.createElement('a');
    elem.href = window.URL.createObjectURL(blob);
    elem.download = filename;        
    document.body.appendChild(elem);
    elem.click();        
    document.body.removeChild(elem);
  }
};

// Populate & download JSON theme file on button click *************************
export const createThemeJsonFile = (
  e,
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
  themeName,
  ) => {
  e.preventDefault();

  const themeJSON = replaceHexColor(
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
    stringColor
  );
  downloadFile(`${themeName}.json`, themeJSON);
};

// Reset colors to original Default Dark+ **************************************
export const resetThemeColors = (
  setCommentColor,
  setFuncKeywordColor,
  setFuncNameColor,
  setRoundBraceColor,
  setParameterColor,
  setCurlyBraceColor,
  setLetConstColor,
  setVariableColor,
  setOperatorColor,
  setNumberColor,
  setPunctuationColor,
  setFatArrowColor,
  setMethodColor,
  setStringColor,
  originalColorState,
) => {
  setCommentColor(originalColorState.commentColor);
  setFuncKeywordColor(originalColorState.funcKeywordColor);
  setFuncNameColor(originalColorState.funcNameColor);
  setRoundBraceColor(originalColorState.roundBraceColor);
  setParameterColor(originalColorState.parameterColor);
  setCurlyBraceColor(originalColorState.curlyBraceColor);
  setLetConstColor(originalColorState.letConstColor);
  setVariableColor(originalColorState.variableColor);
  setOperatorColor(originalColorState.operatorColor);
  setNumberColor(originalColorState.numberColor);
  setPunctuationColor(originalColorState.punctuationColor);
  setFatArrowColor(originalColorState.fatArrowColor);
  setMethodColor(originalColorState.methodColor);
  setStringColor(originalColorState.stringColor);
};

// Reset colors to original Default Dark+ **************************************
export const setThemeToWhite = (
  setCommentColor,
  setFuncKeywordColor,
  setFuncNameColor,
  setRoundBraceColor,
  setParameterColor,
  setCurlyBraceColor,
  setLetConstColor,
  setVariableColor,
  setOperatorColor,
  setNumberColor,
  setPunctuationColor,
  setFatArrowColor,
  setMethodColor,
  setStringColor,
) => {
  const white = '#ffffff';
  setCommentColor(white);
  setFuncKeywordColor(white);
  setFuncNameColor(white);
  setRoundBraceColor(white);
  setParameterColor(white);
  setCurlyBraceColor(white);
  setLetConstColor(white);
  setVariableColor(white);
  setOperatorColor(white);
  setNumberColor(white);
  setPunctuationColor(white);
  setFatArrowColor(white);
  setMethodColor(white);
  setStringColor(white);
};
