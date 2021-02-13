import React from 'react';
import './TextEditor.css';

const TextEditor = () => {

  return (
    <div className='textEditor__wrapper'>
      <div className='textEditor__window'>
        <pre>
          <code className='textEditor__window--lang-js'>
            <span className='string-js comment'>
              // Log how many color themes have been generated
            </span><br />

            <span className='string-js function-keyword'>function </span>
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
  );
};

export default TextEditor;
