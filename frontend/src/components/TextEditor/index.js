import React, { useCallback, useRef, useState } from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import ClickOutside from './ClickOutside';
import './TextEditor.css';

const TextEditor = () => {
  const commentPopover = useRef();
  const funcKeywordPopover = useRef();
  const [commentIsOpen, commentToggle] = useState(false);
  const [commentColor, setCommentColor] = useState('#6A9955');
  const [funcKeywordIsOpen, funcKeywordToggle] = useState(false);
  const [funcKeywordColor, setFuncKeywordColor] = useState('#569CD6');

  const commentClose = useCallback(() => commentToggle(false), []);
  const funcKeywordClose = useCallback(() => funcKeywordToggle(false), []);

  ClickOutside(commentPopover, commentClose);
  ClickOutside(funcKeywordPopover, funcKeywordClose);

  return (
    <div className='themeGenerator__wrapper'>
      <div className='textEditor__wrapper'>
        <div className='textEditor__window'>
          <pre>
            <code className='textEditor__window--lang-js'>
              <span
                className='string-js comment'
                style={{ color: `${commentColor}` }}
                onChange={setCommentColor}
              >
                {'// Log how many color themes have been generated'}
              </span><br />

              <span 
                className='string-js function-keyword'
                style={{ color: `${funcKeywordColor}` }}
                onChange={setFuncKeywordColor}
              >
                function
              </span>
              <span className='string-js function-name'>themeCount</span>
              <span className='string-js round-brace'>(</span>
              <span className='string-js parameter'>colorTheme</span>
              <span className='string-js round-brace'>) </span>
              <span className='string-js curly-brace'>{'{'}</span><br />

              <span className='string-js let-const'>    let </span>
              <span className='string-js variable'>count</span>
              <span className='string-js operator'> = </span>
              <span className='string-js number'>1</span>
              <span className='string-js punctuation'>;</span><br /><br />

              <span className='string-js function-name'>    setInterval</span>
              <span className='string-js round-brace'>(()</span>
              <span className='string-js fat-arrow'>{' => '}</span>
              <span className='string-js curly-brace'>{'{'}</span><br />

              <span className='string-js variable'>        console</span>
              <span className='string-js punctuation'>.</span>
              <span className='string-js method'>log</span>
              <span className='string-js round-brace'>(</span><br />

              <span className='string-js string'>{'            `A new ${'}</span>
              <span className='string-js parameter'>colorTheme</span>
              <span className='string-js string'>{'} has been created ${'}</span>
              <span className='string-js parameter'>count</span>
              <span className='string-js string'>{'} times!`'}</span><br />

              <span className='string-js round-brace'>        )</span>
              <span className='string-js punctuation'>;</span><br />

              <span className='string-js variable'>        count</span>
              <span className='string-js operator'> += </span>
              <span className='string-js number'>1</span>
              <span className='string-js punctuation'>;</span><br />

              <span className='string-js curly-brace'>{'    }'}</span>
              <span className='string-js punctuation'>, </span>
              <span className='string-js number'>500</span>
              <span className='string-js round-brace'>)</span>
              <span className='string-js punctuation'>;</span><br />

              <span className='string-js curly-brace'>{'}'}</span>
              <span className='string-js punctuation'>;</span><br /><br />

              <span className='string-js function-name'>themeCount</span>
              <span className='string-js round-brace'>(</span>
              <span className='string-js string'>'color theme'</span>
              <span className='string-js round-brace'>)</span>
              <span className='string-js punctuation'>;</span>
            </code>
          </pre>
        </div>
      </div>
      <div className='themeGenerator__commentPopoverPicker'>
        <div className='picker' id='commentPicker'>
          <div
            className='swatch'
            style={{ backgroundColor: commentColor }}
            onClick={() => commentToggle(true)}
          />
          {commentIsOpen && (
            <div className='commentPopover' ref={commentPopover}>
              <HexColorPicker color={commentColor} onChange={setCommentColor} id='commentHexPicker'/>
              <HexColorInput color={commentColor} onChange={setCommentColor} id='commentHexInput'/>
            </div>
          )}
        </div>
        <div className='picker' id='funcKeywordPicker'>
          <div
            className='swatch'
            style={{ backgroundColor: funcKeywordColor }}
            onClick={() => funcKeywordToggle(true)}
          />
          {funcKeywordIsOpen && (
            <div className='funcKeywordPopover' ref={funcKeywordPopover}>
              <HexColorPicker color={funcKeywordColor} onChange={setFuncKeywordColor} id='funcKeywordHexPicker'/>
              <HexColorInput color={funcKeywordColor} onChange={setFuncKeywordColor} id='funcKeywordHexInput'/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
