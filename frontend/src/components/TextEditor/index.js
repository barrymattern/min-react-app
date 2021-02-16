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
              
              <span className='string-js number'>1</span>
              
              <span className='string-js punctuation'>;</span><br /><br />

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
              
              <span className='string-js fat-arrow'>{' => '}</span>
              
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
              
              <span className='string-js punctuation'>.</span>
              
              <span className='string-js method'>log</span>
              
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
              
              <span className='string-js punctuation'>;</span><br />

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
              
              <span className='string-js number'>1</span>
              
              <span className='string-js punctuation'>;</span><br />

              {/* CURLY BRACE -------------------- */}
              <span
                className='string-js curly-brace'
                style={{ color: `${curlyBraceColor}` }}
                onChange={setCurlyBraceColor}
              >{'    }'}</span>
              
              <span className='string-js punctuation'>, </span>
              
              <span className='string-js number'>500</span>
              
              {/* ROUND BRACE -------------------- */}
              <span
                className='string-js round-brace'
                style={{ color: `${roundBraceColor}` }}
                onChange={setRoundBraceColor}
              >)</span>
              <span className='string-js punctuation'>;</span><br />

              {/* CURLY BRACE -------------------- */}
              <span
                className='string-js curly-brace'
                style={{ color: `${curlyBraceColor}` }}
                onChange={setCurlyBraceColor}
              >{'}'}</span>
              
              <span className='string-js punctuation'>;</span><br /><br />

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
              
              <span className='string-js string'>'color theme'</span>
              
              {/* ROUND BRACE -------------------- */}
              <span
                className='string-js round-brace'
                style={{ color: `${roundBraceColor}` }}
                onChange={setRoundBraceColor}
              >)</span>
              <span className='string-js punctuation'>;</span>
            </code>
          </pre>
        </div>
      </div>
      <div className='colorPicker__wrapper'>
        <PopoverPicker color={commentColor} onChange={setCommentColor} />
        <PopoverPicker color={funcKeywordColor} onChange={setFuncKeywordColor} />
        <PopoverPicker color={funcNameColor} onChange={setFuncNameColor} />
        <PopoverPicker color={roundBraceColor} onChange={setRoundBraceColor} />
        <PopoverPicker color={parameterColor} onChange={setParameterColor} />
        <PopoverPicker color={curlyBraceColor} onChange={setCurlyBraceColor} />
        <PopoverPicker color={letConstColor} onChange={setLetConstColor} />
        <PopoverPicker color={variableColor} onChange={setVariableColor} />
        <PopoverPicker color={operatorColor} onChange={setOperatorColor} />
      </div>
    </div>
  );
};

export default TextEditor;
