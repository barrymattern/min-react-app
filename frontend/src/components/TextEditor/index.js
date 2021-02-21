import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PopoverPicker from '../PopoverPicker';
import { replaceHexColor, downloadFile } from './themeJson';
import { fetchAllThemes, postNewTheme } from '../../store/themes';
import './TextEditor.css';

const TextEditor = ({ originalColorState }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);

  // Controls "Saved!" popup when saving a theme
  let [savedPopupOpacity, toggleSavedPopupOpacity] = useState('0');
  useEffect(() => {
    setTimeout(() => {
      toggleSavedPopupOpacity('0');
    }, 1500);
  }, [savedPopupOpacity]);

  const [themeName, setThemeName] = useState('Default Dark+');
  const [commentColor, setCommentColor] = useState(originalColorState.commentColor);
  const [funcKeywordColor, setFuncKeywordColor] = useState(originalColorState.funcKeywordColor);
  const [funcNameColor, setFuncNameColor] = useState(originalColorState.funcNameColor);
  const [roundBraceColor, setRoundBraceColor] = useState(originalColorState.roundBraceColor);
  const [parameterColor, setParameterColor] = useState(originalColorState.parameterColor);
  const [curlyBraceColor, setCurlyBraceColor] = useState(originalColorState.curlyBraceColor);
  const [letConstColor, setLetConstColor] = useState(originalColorState.letConstColor);
  const [variableColor, setVariableColor] = useState(originalColorState.variableColor);
  const [operatorColor, setOperatorColor] = useState(originalColorState.operatorColor);
  const [numberColor, setNumberColor] = useState(originalColorState.numberColor);
  const [punctuationColor, setPunctuationColor] = useState(originalColorState.punctuationColor);
  const [fatArrowColor, setFatArrowColor] = useState(originalColorState.fatArrowColor);
  const [methodColor, setMethodColor] = useState(originalColorState.methodColor);
  const [stringColor, setStringColor] = useState(originalColorState.stringColor);

  // Populate & download JSON theme file on button click
  const createThemeJsonFile = (e) => {
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
    downloadFile('myTheme.json', themeJSON);
  };

  const resetThemeColors = () => {
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

  const setThemeToWhite = () => {
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

  const saveThemeToDB = (e) => {
    e.preventDefault();

    // Send info to db
    const newTheme = {
      name: themeName,
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
      comment: null,
      likes: null,
      user_id: user.id,
    };
    // Returns a promise, can chain .then().catch()
    dispatch(postNewTheme(newTheme))
      .then(() => toggleSavedPopupOpacity('1'))
      .then(() => dispatch(fetchAllThemes()))
      .catch((err) => console.log(err));
  };

  return (
    <div className='themeGenerator__wrapper'>
      {/* Buttons above theme editor */}
      <div className='btn__wrapper'>
        <div id='btn__wrapper--mutate'>
          <button
            id='reset-btn'
            onClick={resetThemeColors}
          >Reset</button>
          <button
            id='whiteout-btn'
            onClick={setThemeToWhite}
          >Whiteout</button>
        </div>
        <div className='themeName__wrapper'>
          <input 
            id='themeName'
            value={themeName}
            onChange={(e) => setThemeName(e.target.value)}
          />
        </div>
        <div id='btn__wrapper--save'>
          <button
            id='save-btn'
            onClick={saveThemeToDB}
          >Save</button>
          <button
            id='download-btn'
            onClick={createThemeJsonFile}
          >Download</button>
        </div>
      </div>
      {/* 'Saved!' popup */}
      <div
        id='textEditor__wrapper--savedPopup'
        style={{
          opacity: savedPopupOpacity,
          transition: 'opacity 125ms ease-in-out'
        }}>
        <p id='saved-popup'>Saved!</p>
      </div>

      {/* Text Editor */}
      <div className='textEditor__wrapper'>
        {/* 'Saved!' popup */}
        <div className='textEditor__window'>
          <pre>
            <code className='textEditor__window--lang-js'>
              {/* COMMENT --------------------*/}
              <span
                className='string-js comment'
                style={{ color: `${commentColor}` }}
                onChange={setCommentColor}
              >{'// Log how many color themes have been generated'}</span><br />

              {/* FUNCTION KEYWORD -------------------- */}
              <span 
                className='string-js function-keyword'
                style={{ color: `${funcKeywordColor}` }}
                onChange={setFuncKeywordColor}
              >function</span>

              {/* FUNCTION NAME -------------------- */}
              <span
                className='string-js function-name'
                style={{ color: `${funcNameColor}` }}
                onChange={setFuncNameColor}
              > themeCount</span>

              {/* ROUND BRACE -------------------- */}
              <span
                className='string-js round-brace'
                style={{ color: `${roundBraceColor}` }}
                onChange={setRoundBraceColor}
              >(</span>
              
              {/* PARAMETER ------------------- */}
              <span
                className='string-js parameter'
                style={{ color: `${parameterColor}` }}
                onChange={setParameterColor}
              >colorTheme</span>

              {/* ROUND BRACE -------------------- */}
              <span
                className='string-js round-brace'
                style={{ color: `${roundBraceColor}` }}
                onChange={setRoundBraceColor}
              >) </span>
              
              {/* CURLY BRACE -------------------- */}
              <span
                className='string-js curly-brace'
                style={{ color: `${curlyBraceColor}` }}
                onChange={setCurlyBraceColor}
              >{'{'}</span><br />

              {/* LET-CONST -------------------- */}
              <span
                className='string-js let-const'
                style={{ color: `${letConstColor}` }}
                onChange={setLetConstColor}
              >    let </span>

              {/* VARIABLE -------------------- */}
              <span 
                className='string-js variable'
                style={{ color: `${variableColor}` }}
                onChange={setVariableColor}
              >count</span>
              
              {/* OPERATOR -------------------- */}
              <span 
                className='string-js operator'
                style={{ color: `${operatorColor}` }}
                onChange={setOperatorColor}
              > = </span>
              
              {/* NUMBER -------------------- */}
              <span
                className='string-js number'
                style={{ color: `${numberColor}` }}
                onChange={setNumberColor}
              >1</span>
              
              {/* PUNCTUATION -------------------- */}
              <span
                className='string-js punctuation'
                style={{ color: `${punctuationColor}` }}
                onChange={setPunctuationColor}
              >;</span><br /><br />

              {/* FUNCTION NAME -------------------- */}
              <span
                className='string-js function-name'
                style={{ color: `${funcNameColor}` }}
                onChange={setFuncNameColor}
              >    setInterval</span>
              
              {/* ROUND BRACE -------------------- */}
              <span
                className='string-js round-brace'
                style={{ color: `${roundBraceColor}` }}
                onChange={setRoundBraceColor}
              >(()</span>
              
              {/* FAT ARROW -------------------- */}
              <span
                className='string-js fat-arrow'
                style={{ color: `${fatArrowColor}` }}
                onChange={setFatArrowColor}
              >{' => '}</span>
              
              {/* CURLY BRACE -------------------- */}
              <span
                className='string-js curly-brace'
                style={{ color: `${curlyBraceColor}` }}
                onChange={setCurlyBraceColor}
              >{'{'}</span><br />

              {/* VARIABLE -------------------- */}
              <span 
                className='string-js variable'
                style={{ color: `${variableColor}` }}
                onChange={setVariableColor}
              >        console</span>
              
              {/* PUNCTUATION -------------------- */}
              <span
                className='string-js punctuation'
                style={{ color: `${punctuationColor}` }}
                onChange={setPunctuationColor}
              >.</span>
              
              {/* METHOD -------------------- */}
              <span
                className='string-js method'
                style={{ color: `${methodColor}` }}
                onChange={setMethodColor}
              >log</span>
              
              {/* ROUND BRACE -------------------- */}
              <span
                className='string-js round-brace'
                style={{ color: `${roundBraceColor}` }}
                onChange={setRoundBraceColor}
              >(</span><br />

              {/* STRING -------------------- */}
              <span
                className='string-js string'
                style={{ color: `${stringColor}` }}
                onChange={setStringColor}
              >{'            `A new ${'}</span>
              
              {/* PARAMETER ------------------- */}
              <span
                className='string-js parameter'
                style={{ color: `${parameterColor}` }}
                onChange={setParameterColor}
              >colorTheme</span>
              
              {/* STRING -------------------- */}
              <span
                className='string-js string'
                style={{ color: `${stringColor}` }}
                onChange={setStringColor}
              >{'} has been created ${'}</span>
              
              {/* PARAMETER ------------------- */}
              <span
                className='string-js parameter'
                style={{ color: `${parameterColor}` }}
                onChange={setParameterColor}
              >count</span>
              
              {/* STRING -------------------- */}
              <span
                className='string-js string'
                style={{ color: `${stringColor}` }}
                onChange={setStringColor}
              >{'} times!`'}</span><br />

              {/* ROUND BRACE -------------------- */}
              <span
                className='string-js round-brace'
                style={{ color: `${roundBraceColor}` }}
                onChange={setRoundBraceColor}
              >        )</span>
              
              {/* PUNCTUATION -------------------- */}
              <span
                className='string-js punctuation'
                style={{ color: `${punctuationColor}` }}
                onChange={setPunctuationColor}
              >;</span><br />

              {/* VARIABLE -------------------- */}
              <span 
                className='string-js variable'
                style={{ color: `${variableColor}` }}
                onChange={setVariableColor}
              >        count</span>
              
              {/* OPERATOR */}
              <span 
                className='string-js operator'
                style={{ color: `${operatorColor}` }}
                onChange={setOperatorColor}
              > += </span>
              
              {/* NUMBER ------------------- */}
              <span
                className='string-js number'
                style={{ color: `${numberColor}` }}
                onChange={setNumberColor}
              >1</span>
              
              {/* PUNCTUATION -------------------- */}
              <span
                className='string-js punctuation'
                style={{ color: `${punctuationColor}` }}
                onChange={setPunctuationColor}
              >;</span><br />

              {/* CURLY BRACE -------------------- */}
              <span
                className='string-js curly-brace'
                style={{ color: `${curlyBraceColor}` }}
                onChange={setCurlyBraceColor}
              >{'    }'}</span>
              
              {/* PUNCTUATION -------------------- */}
              <span
                className='string-js punctuation'
                style={{ color: `${punctuationColor}` }}
                onChange={setPunctuationColor}
              >, </span>
              
              {/* NUMBER */}
              <span
                className='string-js number'
                style={{ color: `${numberColor}` }}
                onChange={setNumberColor}
              >500</span>
              
              {/* ROUND BRACE -------------------- */}
              <span
                className='string-js round-brace'
                style={{ color: `${roundBraceColor}` }}
                onChange={setRoundBraceColor}
              >)</span>

              {/* PUNCTUATION -------------------- */}
              <span
                className='string-js punctuation'
                style={{ color: `${punctuationColor}` }}
                onChange={setPunctuationColor}
              >;</span><br />

              {/* CURLY BRACE -------------------- */}
              <span
                className='string-js curly-brace'
                style={{ color: `${curlyBraceColor}` }}
                onChange={setCurlyBraceColor}
              >{'}'}</span>
              
              {/* PUNCTUATION -------------------- */}
              <span
                className='string-js punctuation'
                style={{ color: `${punctuationColor}` }}
                onChange={setPunctuationColor}
              >;</span><br /><br />

              {/* FUNCTION NAME -------------------- */}
              <span
                className='string-js function-name'
                style={{ color: `${funcNameColor}` }}
                onChange={setFuncNameColor}
              >themeCount</span>
              
              {/* ROUND BRACE -------------------- */}
              <span
                className='string-js round-brace'
                style={{ color: `${roundBraceColor}` }}
                onChange={setRoundBraceColor}
              >(</span>
              
              {/* STRING -------------------- */}
              <span
                className='string-js string'
                style={{ color: `${stringColor}` }}
                onChange={setStringColor}
              >'color theme'</span>
              
              {/* ROUND BRACE -------------------- */}
              <span
                className='string-js round-brace'
                style={{ color: `${roundBraceColor}` }}
                onChange={setRoundBraceColor}
              >)</span>

              {/* PUNCTUATION -------------------- */}
              <span
                className='string-js punctuation'
                style={{ color: `${punctuationColor}` }}
                onChange={setPunctuationColor}
              >;</span>
            </code>
          </pre>
        </div>
      </div>

      {/* Color Picker Swatches */}
      <div className='colorPicker__wrapper'>
        <div className='tooltip'>
          <PopoverPicker color={commentColor} onChange={setCommentColor} />
          <span className='tooltiptext'>Comment</span>
        </div>
        <div className='tooltip'>
          <PopoverPicker color={funcKeywordColor} onChange={setFuncKeywordColor} />
          <span className='tooltiptext'>Function Keyword</span>
        </div>
        <div className='tooltip'>
          <PopoverPicker color={funcNameColor} onChange={setFuncNameColor} />
          <span className='tooltiptext'>Function Name</span>
        </div>
        <div className='tooltip'>
          <PopoverPicker color={roundBraceColor} onChange={setRoundBraceColor} />
          <span className='tooltiptext'>Round Brace</span>
        </div>
        <div className='tooltip'>
          <PopoverPicker color={parameterColor} onChange={setParameterColor} />
          <span className='tooltiptext'>Parameter</span>
        </div>
        <div className='tooltip'>
          <PopoverPicker color={curlyBraceColor} onChange={setCurlyBraceColor} />
          <span className='tooltiptext'>Curly Brace</span>
        </div>
        <div className='tooltip'>
          <PopoverPicker color={letConstColor} onChange={setLetConstColor} />
          <span className='tooltiptext'>Let & Const</span>
        </div>
        <div className='tooltip'>
          <PopoverPicker color={variableColor} onChange={setVariableColor} />
          <span className='tooltiptext'>Variable</span>
        </div>
        <div className='tooltip'>
          <PopoverPicker color={operatorColor} onChange={setOperatorColor} />
          <span className='tooltiptext'>Operator</span>
        </div>
        <div className='tooltip'>
          <PopoverPicker color={numberColor} onChange={setNumberColor} />
          <span className='tooltiptext'>Number</span>
        </div>
        <div className='tooltip'>
          <PopoverPicker color={punctuationColor} onChange={setPunctuationColor} />
          <span className='tooltiptext'>Punctuation</span>
        </div>
        <div className='tooltip'>
          <PopoverPicker color={fatArrowColor} onChange={setFatArrowColor} />
          <span className='tooltiptext'>Fat Arrow</span>
        </div>
        <div className='tooltip'>
          <PopoverPicker color={methodColor} onChange={setMethodColor} />
          <span className='tooltiptext'>Method</span>
        </div>
        <div className='tooltip'>
          <PopoverPicker color={stringColor} onChange={setStringColor} />
          <span className='tooltiptext'>String</span>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
