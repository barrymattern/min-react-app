import React, { useState } from 'react';
import PopoverPicker from '../PopoverPicker';
import './TextEditor.css';

const TextEditor = () => {
  const [commentColor, setCommentColor] = useState('#6A9955');
  const [funcKeywordColor, setFuncKeywordColor] = useState('#569CD6');
  const [funcNameColor, setFuncNameColor] = useState('#DCDCAA');
  const [roundBraceColor, setRoundBraceColor] = useState('#d4d4d4');
  const [parameterColor, setParameterColor] = useState('#9CDCFE');
  const [curlyBraceColor, setCurlyBraceColor] = useState('#d4d4d4');
  const [letConstColor, setLetConstColor] = useState('#569CD6');
  const [variableColor, setVariableColor] = useState('#9CDCFE');
  const [operatorColor, setOperatorColor] = useState('#d4d4d4');
  const [numberColor, setNumberColor] = useState('#B5CEA8');
  const [punctuationColor, setPunctuationColor] = useState('#d4d4d4');
  const [fatArrowColor, setFatArrowColor] = useState('#569CD6');
  const [methodColor, setMethodColor] = useState('#DCDCAA');
  const [stringColor, setStringColor] = useState('#CE9178');

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
          <span className='tooltiptext'>Let/Const</span>
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
