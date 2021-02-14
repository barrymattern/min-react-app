import React, { useCallback, useRef, useState } from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import ClickOutside from './ClickOutside';
import './TextEditor.css';

const TextEditor = () => {
  const commentPopover = useRef();
  const funcKeywordPopover = useRef();
  const funcNamePopover = useRef();
  const roundBracePopover = useRef();
  const parameterPopover = useRef();

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

  const commentClose = useCallback(() => commentToggle(false), []);
  const funcKeywordClose = useCallback(() => funcKeywordToggle(false), []);
  const funcNameClose = useCallback(() => setFuncNameToggle(false), []);
  const roundBraceClose = useCallback(() => setRoundBraceToggle(false), []);
  const parameterClose = useCallback(() => setParameterToggle(false), []);

  ClickOutside(commentPopover, commentClose);
  ClickOutside(funcKeywordPopover, funcKeywordClose);
  ClickOutside(funcNamePopover, funcNameClose);
  ClickOutside(roundBracePopover, roundBraceClose);
  ClickOutside(parameterPopover, parameterClose);

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
              >
                {'// Log how many color themes have been generated'}
              </span><br />

              {/* FUNCTION KEYWORD -------------------- */}
              <span 
                className='string-js function-keyword'
                style={{ color: `${funcKeywordColor}` }}
                onChange={setFuncKeywordColor}
              >
                function
              </span>

              {/* FUNCTION NAME -------------------- */}
              <span
                className='string-js function-name'
                style={{ color: `${funcNameColor}` }}
                onChange={setFuncNameColor}
              >
                themeCount
              </span>

              {/* ROUND BRACE -------------------- */}
              <span
                className='string-js round-brace'
                style={{ color: `${roundBraceColor}` }}
                onChange={setRoundBraceColor}
              >
                (
              </span>
              
              {/* PARAMETER ------------------- */}
              <span
                className='string-js parameter'
                style={{ color: `${parameterColor}` }}
                onChange={setParameterColor}
              >
                colorTheme
              </span>

              {/* ROUND BRACE -------------------- */}
              <span
                className='string-js round-brace'
                style={{ color: `${roundBraceColor}` }}
                onChange={setRoundBraceColor}
              >
                ) 
              </span>
              <span className='string-js curly-brace'>{'{'}</span><br />

              <span className='string-js let-const'>    let </span>
              <span className='string-js variable'>count</span>
              <span className='string-js operator'> = </span>
              <span className='string-js number'>1</span>
              <span className='string-js punctuation'>;</span><br /><br />

              <span
                className='string-js function-name'
                style={{ color: `${funcNameColor}` }}
                onChange={setFuncNameColor}
              >
                    setInterval
              </span>
              
              {/* ROUND BRACE -------------------- */}
              <span
                className='string-js round-brace'
                style={{ color: `${roundBraceColor}` }}
                onChange={setRoundBraceColor}
              >
                (()
              </span>
              <span className='string-js fat-arrow'>{' => '}</span>
              <span className='string-js curly-brace'>{'{'}</span><br />

              <span className='string-js variable'>        console</span>
              <span className='string-js punctuation'>.</span>
              <span className='string-js method'>log</span>
              
              {/* ROUND BRACE -------------------- */}
              <span
                className='string-js round-brace'
                style={{ color: `${roundBraceColor}` }}
                onChange={setRoundBraceColor}
              >
                (
              </span><br />

              <span className='string-js string'>{'            `A new ${'}</span>
              
              {/* PARAMETER ------------------- */}
              <span
                className='string-js parameter'
                style={{ color: `${parameterColor}` }}
                onChange={setParameterColor}
              >
                colorTheme
              </span>
              <span className='string-js string'>{'} has been created ${'}</span>
              
              {/* PARAMETER ------------------- */}
              <span
                className='string-js parameter'
                style={{ color: `${parameterColor}` }}
                onChange={setParameterColor}
              >
                count
              </span>
              <span className='string-js string'>{'} times!`'}</span><br />

              
              {/* ROUND BRACE -------------------- */}
              <span
                className='string-js round-brace'
                style={{ color: `${roundBraceColor}` }}
                onChange={setRoundBraceColor}
              >
                        )
              </span>
              <span className='string-js punctuation'>;</span><br />

              <span className='string-js variable'>        count</span>
              <span className='string-js operator'> += </span>
              <span className='string-js number'>1</span>
              <span className='string-js punctuation'>;</span><br />

              <span className='string-js curly-brace'>{'    }'}</span>
              <span className='string-js punctuation'>, </span>
              <span className='string-js number'>500</span>
              
              {/* ROUND BRACE -------------------- */}
              <span
                className='string-js round-brace'
                style={{ color: `${roundBraceColor}` }}
                onChange={setRoundBraceColor}
              >
                )
              </span>
              <span className='string-js punctuation'>;</span><br />

              <span className='string-js curly-brace'>{'}'}</span>
              <span className='string-js punctuation'>;</span><br /><br />

              <span
                className='string-js function-name'
                style={{ color: `${funcNameColor}` }}
                onChange={setFuncNameColor}
              >
                themeCount
              </span>
              <span
                className='string-js round-brace'
                style={{ color: `${roundBraceColor}` }}
                onChange={setRoundBraceColor}
              >
                (
              </span>
              <span className='string-js string'>'color theme'</span>
              <span
                className='string-js round-brace'
                style={{ color: `${roundBraceColor}` }}
                onChange={setRoundBraceColor}
              >
                )
              </span>
              <span className='string-js punctuation'>;</span>
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
            style={{ backgroundColor: commentColor }}
            onClick={() => commentToggle(true)}
          />
          {commentIsOpen && (
            <div className='commentPopover' ref={commentPopover}>
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
            <div className='funcKeywordPopover' ref={funcKeywordPopover}>
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
            <div className='funcNamePopover' ref={funcNamePopover}>
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
            <div className='roundBracePopover' ref={roundBracePopover}>
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
            <div className='parameterPopover' ref={parameterPopover}>
              <HexColorPicker color={parameterColor} onChange={setParameterColor} />
              <HexColorInput color={parameterColor} onChange={setParameterColor} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
