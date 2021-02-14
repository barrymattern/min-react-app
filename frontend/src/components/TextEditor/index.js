import React, { useCallback, useRef, useState } from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import ClickOutside from './ClickOutside';
import './TextEditor.css';

const TextEditor = () => {
  const popover = useRef();

  const [commentIsOpen, commentToggle] = useState(false);
  const [commentColor, setCommentColor] = useState('#6A9955');
  
  const [funcKeywordIsOpen, funcKeywordToggle] = useState(false);
  const [funcKeywordColor, setFuncKeywordColor] = useState('#569CD6');

  const [funcNameIsOpen, setFuncNameToggle] = useState(false);
  const [funcNameColor, setFuncNameColor] = useState('#DCDCAA');

  const [roundBraceIsOpen, setRoundBraceToggle] = useState(false);
  const [roundBraceColor, setRoundBraceColor] = useState('#d4d4d4');

  const [parameterIsOpen, setParameterToggle] = useState(false);
  const [parameterColor, setParameterColor] = useState('#9CDCFE');

  const [curlyBraceIsOpen, setCurlyBraceToggle] = useState(false);
  const [curlyBraceColor, setCurlyBraceColor] = useState('#d4d4d4');

  const [letConstIsOpen, setLetConstToggle] = useState(false);
  const [letConstColor, setLetConstColor] = useState('#569CD6');

  const [variableIsOpen, setVariableToggle] = useState(false);
  const [variableColor, setVariableColor] = useState('#9CDCFE');

  const [operatorIsOpen, setOperatorToggle] = useState(false);
  const [operatorColor, setOperatorColor] = useState('#d4d4d4');

  const [numberIsOpen, setNumberToggle] = useState(false);
  const [numberColor, setNumberColor] = useState('#B5CEA8');

  const [punctuationIsOpen, setPunctuationToggle] = useState(false);
  const [punctuationColor, setPunctuationColor] = useState('#d4d4d4');

  const [fatArrowIsOpen, setFatArrowToggle] = useState(false);
  const [fatArrowColor, setFatArrowColor] = useState('#569CD6');

  const [methodIsOpen, setMethodToggle] = useState(false);
  const [methodColor, setMethodColor] = useState('#DCDCAA');

  const commentClose = useCallback(() => commentToggle(false), []);
  const funcKeywordClose = useCallback(() => funcKeywordToggle(false), []);
  const funcNameClose = useCallback(() => setFuncNameToggle(false), []);
  const roundBraceClose = useCallback(() => setRoundBraceToggle(false), []);
  const parameterClose = useCallback(() => setParameterToggle(false), []);
  const curlyBraceClose = useCallback(() => setCurlyBraceToggle(false), []);
  const letConstClose = useCallback(() => setLetConstToggle(false), []);
  const variableClose = useCallback(() => setVariableToggle(false), []);
  const operatorClose = useCallback(() => setOperatorToggle(false), []);
  const numberClose = useCallback(() => setNumberToggle(false), []);
  const punctuationClose = useCallback(() => setPunctuationToggle(false), []);
  const fatArrowClose = useCallback(() => setFatArrowToggle(false), []);
  const methodClose = useCallback(() => setMethodToggle(false), []);

  ClickOutside(popover, commentClose);
  ClickOutside(popover, funcKeywordClose);
  ClickOutside(popover, funcNameClose);
  ClickOutside(popover, roundBraceClose);
  ClickOutside(popover, parameterClose);
  ClickOutside(popover, curlyBraceClose);
  ClickOutside(popover, letConstClose);
  ClickOutside(popover, variableClose);
  ClickOutside(popover, operatorClose);
  ClickOutside(popover, numberClose);
  ClickOutside(popover, punctuationClose);
  ClickOutside(popover, fatArrowClose);
  ClickOutside(popover, methodClose);

  return (
    <div className='themeGenerator__wrapper'>
      <div className='textEditor__wrapper'>
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
              
              {/* CURLY BRACE PICKER -------------------- */}
              <span
                className='string-js curly-brace'
                style={{ color: `${curlyBraceColor}` }}
                onChange={setCurlyBraceColor}
              >{'{'}</span><br />

              {/* LET-CONST PICKER -------------------- */}
              <span
                className='string-js let-const'
                style={{ color: `${letConstColor}` }}
                onChange={setLetConstColor}
              >    let </span>

              {/* VARIABLE PICKER -------------------- */}
              <span 
                className='string-js variable'
                style={{ color: `${variableColor}` }}
                onChange={setVariableColor}
              >count</span>
              
              {/* OPERATOR PICKER */}
              <span 
                className='string-js operator'
                style={{ color: `${operatorColor}` }}
                onChange={setOperatorColor}
              > = </span>
              
              {/* NUMBER PICKER */}
              <span
                className='string-js number'
                value={{ color: `${numberColor}` }}
                onChange={setNumberColor}
              >1</span>
              
              {/* PUNCTUATION PICKER */}
              <span
                className='string-js punctuation'
                value={{ color: `${punctuationColor}` }}
                onChange={setPunctuationColor}
              >;</span><br /><br />

              {/* FUNCTION NAME PICKER */}
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
              
              {/* FAT ARROW PICKER */}
              <span
                className='string-js fat-arrow'
                value={{ color: `${fatArrowColor}` }}
                onChange={setFatArrowColor}
              >{' => '}</span>
              
              {/* CURLY BRACE PICKER -------------------- */}
              <span
                className='string-js curly-brace'
                style={{ color: `${curlyBraceColor}` }}
                onChange={setCurlyBraceColor}
              >{'{'}</span><br />

              {/* VARIABLE PICKER -------------------- */}
              <span 
                className='string-js variable'
                style={{ color: `${variableColor}` }}
                onChange={setVariableColor}
              >        console</span>
              
              {/* PUNCTUATION PICKER */}
              <span
                className='string-js punctuation'
                value={{ color: `${punctuationColor}` }}
                onChange={setPunctuationColor}
              >.</span>
              
              {/* METHOD PICKER */}
              <span
                className='string-js method'
                value={{ color: `${methodColor}` }}
                onChange={setMethodColor}
              >log</span>
              
              {/* ROUND BRACE -------------------- */}
              <span
                className='string-js round-brace'
                style={{ color: `${roundBraceColor}` }}
                onChange={setRoundBraceColor}
              >(</span><br />

              <span className='string-js string'>{'            `A new ${'}</span>
              
              {/* PARAMETER ------------------- */}
              <span
                className='string-js parameter'
                style={{ color: `${parameterColor}` }}
                onChange={setParameterColor}
              >colorTheme</span>
              
              <span className='string-js string'>{'} has been created ${'}</span>
              
              {/* PARAMETER ------------------- */}
              <span
                className='string-js parameter'
                style={{ color: `${parameterColor}` }}
                onChange={setParameterColor}
              >count</span>
              
              <span className='string-js string'>{'} times!`'}</span><br />

              {/* ROUND BRACE -------------------- */}
              <span
                className='string-js round-brace'
                style={{ color: `${roundBraceColor}` }}
                onChange={setRoundBraceColor}
              >        )</span>
              
              {/* PUNCTUATION PICKER */}
              <span
                className='string-js punctuation'
                value={{ color: `${punctuationColor}` }}
                onChange={setPunctuationColor}
              >;</span><br />

              {/* VARIABLE PICKER -------------------- */}
              <span 
                className='string-js variable'
                style={{ color: `${variableColor}` }}
                onChange={setVariableColor}
              >        count</span>
              
              {/* OPERATOR PICKER */}
              <span 
                className='string-js operator'
                style={{ color: `${operatorColor}` }}
                onChange={setOperatorColor}
              > += </span>
              
              {/* NUMBER PICKER */}
              <span
                className='string-js number'
                value={{ color: `${numberColor}` }}
                onChange={setNumberColor}
              >1</span>
              
              {/* PUNCTUATION PICKER */}
              <span
                className='string-js punctuation'
                value={{ color: `${punctuationColor}` }}
                onChange={setPunctuationColor}
              >;</span><br />

              {/* CURLY BRACE PICKER -------------------- */}
              <span
                className='string-js curly-brace'
                style={{ color: `${curlyBraceColor}` }}
                onChange={setCurlyBraceColor}
              >{'    }'}</span>
              
              {/* PUNCTUATION PICKER */}
              <span
                className='string-js punctuation'
                value={{ color: `${punctuationColor}` }}
                onChange={setPunctuationColor}
              >, </span>
              
              {/* NUMBER PICKER */}
              <span
                className='string-js number'
                value={{ color: `${numberColor}` }}
                onChange={setNumberColor}
              >500</span>
              
              {/* ROUND BRACE -------------------- */}
              <span
                className='string-js round-brace'
                style={{ color: `${roundBraceColor}` }}
                onChange={setRoundBraceColor}
              >)</span>
              
              {/* PUNCTUATION PICKER */}
              <span
                className='string-js punctuation'
                value={{ color: `${punctuationColor}` }}
                onChange={setPunctuationColor}
              >;</span><br />

              {/* CURLY BRACE PICKER -------------------- */}
              <span
                className='string-js curly-brace'
                style={{ color: `${curlyBraceColor}` }}
                onChange={setCurlyBraceColor}
              >{'}'}</span>
              
              {/* PUNCTUATION PICKER */}
              <span
                className='string-js punctuation'
                value={{ color: `${punctuationColor}` }}
                onChange={setPunctuationColor}
              >;</span><br /><br />

              {/* FUNCTION NAME PICKER -------------------- */}
              <span
                className='string-js function-name'
                style={{ color: `${funcNameColor}` }}
                onChange={setFuncNameColor}
              >themeCount</span>
              
              {/* ROUND BRACE PICKER */}
              <span
                className='string-js round-brace'
                style={{ color: `${roundBraceColor}` }}
                onChange={setRoundBraceColor}
              >(</span>
              
              <span className='string-js string'>'color theme'</span>
              
              {/* ROUND BRACE PICKER */}
              <span
                className='string-js round-brace'
                style={{ color: `${roundBraceColor}` }}
                onChange={setRoundBraceColor}
              >
                )
              </span>
              {/* PUNCTUATION PICKER */}
              <span
                className='string-js punctuation'
                value={{ color: `${punctuationColor}` }}
                onChange={setPunctuationColor}
              >;</span>
            </code>
          </pre>
        </div>
      </div>

{/* POPOVER COLOR PICKERS ****************************************************/}
      <div className='themeGenerator__popoverPickers'>
      
        {/* COMMENT PICKER -------------------- */}
        <div className='picker' id='commentPicker'>
          <div
            className='swatch'
            id="commentSwatch"
            style={{ backgroundColor: commentColor }}
            onClick={() => commentToggle(true)}
          />
          {commentIsOpen && (
            <div className='commentPopover' ref={popover}>
              <HexColorPicker color={commentColor} onChange={setCommentColor} />
              <HexColorInput color={commentColor} onChange={setCommentColor} />
            </div>
          )}
        </div>

        {/* FUNCTION KEYWORD PICKER -------------------- */}
        <div className='picker' id='funcKeywordPicker'>
          <div
            className='swatch'
            style={{ backgroundColor: funcKeywordColor }}
            onClick={() => funcKeywordToggle(true)}
          />
          {funcKeywordIsOpen && (
            <div className='funcKeywordPopover' ref={popover}>
              <HexColorPicker color={funcKeywordColor} onChange={setFuncKeywordColor} />
              <HexColorInput color={funcKeywordColor} onChange={setFuncKeywordColor} />
            </div>
          )}
        </div>

        {/* FUNCTION NAME PICKER -------------------- */}
        <div className='picker' id='funcNamePicker'>
          <div
            className='swatch'
            style={{ backgroundColor: funcNameColor }}
            onClick={() => setFuncNameToggle(true)}
          />
          {funcNameIsOpen && (
            <div className='funcNamePopover' ref={popover}>
              <HexColorPicker color={funcNameColor} onChange={setFuncNameColor} />
              <HexColorInput color={funcNameColor} onChange={setFuncNameColor} />
            </div>
          )}
        </div>

        {/* ROUND BRACE PICKER -------------------- */}
        <div className='picker' id='roundBracePicker'>
          <div
            className='swatch'
            style={{ backgroundColor: roundBraceColor }}
            onClick={() => setRoundBraceToggle(true)}
          />
          {roundBraceIsOpen && (
            <div className='roundBracePopover' ref={popover}>
              <HexColorPicker color={roundBraceColor} onChange={setRoundBraceColor} />
              <HexColorInput color={roundBraceColor} onChange={setRoundBraceColor} />
            </div>
          )}
        </div>

        {/* PARAMETER PICKER -------------------- */}
        <div className='picker' id='parameterPicker'>
          <div
            className='swatch'
            style={{ backgroundColor: parameterColor }}
            onClick={() => setParameterToggle(true)}
          />
          {parameterIsOpen && (
            <div className='parameterPopover' ref={popover}>
              <HexColorPicker color={parameterColor} onChange={setParameterColor} />
              <HexColorInput color={parameterColor} onChange={setParameterColor} />
            </div>
          )}
        </div>

        {/* CURLY BRACE PICKER -------------------- */}
        <div className='picker' id='curlyBracePicker'>
          <div
            className='swatch'
            style={{ backgroundColor: curlyBraceColor }}
            onClick={() => setCurlyBraceToggle(true)}
          />
          {curlyBraceIsOpen && (
            <div className='curlyBracePopover' ref={popover}>
              <HexColorPicker color={curlyBraceColor} onChange={setCurlyBraceColor} />
              <HexColorInput color={curlyBraceColor} onChange={setCurlyBraceColor} />
            </div>
          )}
        </div>

        {/* LET CONST PICKER -------------------- */}
        <div className='picker' id='letConstPicker'>
          <div
            className='swatch'
            style={{ backgroundColor: letConstColor }}
            onClick={() => setLetConstToggle(true)}
          />
          {letConstIsOpen && (
            <div className='popover' ref={popover}>
              <HexColorPicker color={letConstColor} onChange={setLetConstColor} />
              <HexColorInput color={letConstColor} onChange={setLetConstColor} />
            </div>
          )}
        </div>

        {/* VARIABLE PICKER */}
        <div className='picker' id='variablePicker'>
          <div
            className='swatch'
            style={{ backgroundColor: variableColor }}
            onClick={() => setVariableToggle(true)}
          />
          {variableIsOpen && (
            <div className='popover' ref={popover}>
              <HexColorPicker color={variableColor} onChange={variableColor} />
              <HexColorInput color={variableColor} onChange={variableColor} />
            </div>
          )}
        </div>

        {/* OPERATOR PICKER */}
        <div className='picker' id='operatorPicker'>
          <div
            className='swatch'
            style={{ backgroundColor: operatorColor }}
            onClick={() => setOperatorToggle(true)}
          />
          {operatorIsOpen && (
            <div className='popover' ref={popover}>
              <HexColorPicker color={operatorColor} onChange={operatorColor} />
              <HexColorInput color={operatorColor} onChange={operatorColor} />
            </div>
          )}
        </div>

        {/* NUMBER PICKER */}
        <div className='picker' id='numberPicker'>
          <div
            className='swatch'
            style={{ backgroundColor: numberColor }}
            onClick={() => setNumberToggle(true)}
          />
          {numberIsOpen && (
            <div className='popover' ref={popover}>
              <HexColorPicker color={numberColor} onChange={numberColor} />
              <HexColorInput color={numberColor} onChange={numberColor} />
            </div>
          )}
        </div>

        {/* PUNCTUATION PICKER */}
        <div className='picker' id='punctuationPicker'>
          <div
            className='swatch'
            style={{ backgroundColor: punctuationColor }}
            onClick={() => setPunctuationToggle(true)}
          />
          {punctuationIsOpen && (
            <div className='popover' ref={popover}>
              <HexColorPicker color={punctuationColor} onChange={punctuationColor} />
              <HexColorInput color={punctuationColor} onChange={punctuationColor} />
            </div>
          )}
        </div>

        {/* FAT ARROW PICKER */}
        <div className='picker' id='fatArrowPicker'>
          <div
            className='swatch'
            style={{ backgroundColor: fatArrowColor }}
            onClick={() => setFatArrowToggle(true)}
          />
          {fatArrowIsOpen && (
            <div className='popover' ref={popover}>
              <HexColorPicker color={fatArrowColor} onChange={fatArrowColor} />
              <HexColorInput color={fatArrowColor} onChange={fatArrowColor} />
            </div>
          )}
        </div>

        {/* METHOD PICKER */}
        <div className='picker' id='methodPicker'>
          <div
            className='swatch'
            style={{ backgroundColor: methodColor }}
            onClick={() => setMethodToggle(true)}
          />
          {methodIsOpen && (
            <div className='popover' ref={popover}>
              <HexColorPicker color={methodColor} onChange={methodColor} />
              <HexColorInput color={methodColor} onChange={methodColor} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
