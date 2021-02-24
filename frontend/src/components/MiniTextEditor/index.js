import React from 'react';

const MiniTextEditor = ({
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
}) => {

  return (
    <div className='textEditor__wrapper'>
      {/* 'Saved!' popup */}
      <div className='textEditor__window'>
        <pre>
          <code className='textEditor__window--lang-js'>
            {/* COMMENT --------------------*/}
            <span
              className='string-js comment'
              style={{ color: `${commentColor}` }}
            >{'// Log how many color themes have been generated'}</span><br />

            {/* FUNCTION KEYWORD -------------------- */}
            <span 
              className='string-js function-keyword'
              style={{ color: `${funcKeywordColor}` }}
            >function</span>

            {/* FUNCTION NAME -------------------- */}
            <span
              className='string-js function-name'
              style={{ color: `${funcNameColor}` }}
            > themeCount</span>

            {/* ROUND BRACE -------------------- */}
            <span
              className='string-js round-brace'
              style={{ color: `${roundBraceColor}` }}
            >(</span>
            
            {/* PARAMETER ------------------- */}
            <span
              className='string-js parameter'
              style={{ color: `${parameterColor}` }}
            >colorTheme</span>

            {/* ROUND BRACE -------------------- */}
            <span
              className='string-js round-brace'
              style={{ color: `${roundBraceColor}` }}
            >) </span>
            
            {/* CURLY BRACE -------------------- */}
            <span
              className='string-js curly-brace'
              style={{ color: `${curlyBraceColor}` }}
            >{'{'}</span><br />

            {/* LET-CONST -------------------- */}
            <span
              className='string-js let-const'
              style={{ color: `${letConstColor}` }}
            >    let </span>

            {/* VARIABLE -------------------- */}
            <span 
              className='string-js variable'
              style={{ color: `${variableColor}` }}
            >count</span>
            
            {/* OPERATOR -------------------- */}
            <span 
              className='string-js operator'
              style={{ color: `${operatorColor}` }}
            > = </span>
            
            {/* NUMBER -------------------- */}
            <span
              className='string-js number'
              style={{ color: `${numberColor}` }}
            >1</span>
            
            {/* PUNCTUATION -------------------- */}
            <span
              className='string-js punctuation'
              style={{ color: `${punctuationColor}` }}
            >;</span><br /><br />

            {/* FUNCTION NAME -------------------- */}
            <span
              className='string-js function-name'
              style={{ color: `${funcNameColor}` }}
            >    setInterval</span>
            
            {/* ROUND BRACE -------------------- */}
            <span
              className='string-js round-brace'
              style={{ color: `${roundBraceColor}` }}
            >(()</span>
            
            {/* FAT ARROW -------------------- */}
            <span
              className='string-js fat-arrow'
              style={{ color: `${fatArrowColor}` }}
            >{' => '}</span>
            
            {/* CURLY BRACE -------------------- */}
            <span
              className='string-js curly-brace'
              style={{ color: `${curlyBraceColor}` }}
            >{'{'}</span><br />

            {/* VARIABLE -------------------- */}
            <span 
              className='string-js variable'
              style={{ color: `${variableColor}` }}
            >        console</span>
            
            {/* PUNCTUATION -------------------- */}
            <span
              className='string-js punctuation'
              style={{ color: `${punctuationColor}` }}
            >.</span>
            
            {/* METHOD -------------------- */}
            <span
              className='string-js method'
              style={{ color: `${methodColor}` }}
            >log</span>
            
            {/* ROUND BRACE -------------------- */}
            <span
              className='string-js round-brace'
              style={{ color: `${roundBraceColor}` }}
            >(</span><br />

            {/* STRING -------------------- */}
            <span
              className='string-js string'
              style={{ color: `${stringColor}` }}
            >{'            `A new ${'}</span>
            
            {/* PARAMETER ------------------- */}
            <span
              className='string-js parameter'
              style={{ color: `${parameterColor}` }}
            >colorTheme</span>
            
            {/* STRING -------------------- */}
            <span
              className='string-js string'
              style={{ color: `${stringColor}` }}
            >{'} has been created ${'}</span>
            
            {/* PARAMETER ------------------- */}
            <span
              className='string-js parameter'
              style={{ color: `${parameterColor}` }}
            >count</span>
            
            {/* STRING -------------------- */}
            <span
              className='string-js string'
              style={{ color: `${stringColor}` }}
            >{'} times!`'}</span><br />

            {/* ROUND BRACE -------------------- */}
            <span
              className='string-js round-brace'
              style={{ color: `${roundBraceColor}` }}
            >        )</span>
            
            {/* PUNCTUATION -------------------- */}
            <span
              className='string-js punctuation'
              style={{ color: `${punctuationColor}` }}
            >;</span><br />

            {/* VARIABLE -------------------- */}
            <span 
              className='string-js variable'
              style={{ color: `${variableColor}` }}
            >        count</span>
            
            {/* OPERATOR */}
            <span 
              className='string-js operator'
              style={{ color: `${operatorColor}` }}
            > += </span>
            
            {/* NUMBER ------------------- */}
            <span
              className='string-js number'
              style={{ color: `${numberColor}` }}
            >1</span>
            
            {/* PUNCTUATION -------------------- */}
            <span
              className='string-js punctuation'
              style={{ color: `${punctuationColor}` }}
            >;</span><br />

            {/* CURLY BRACE -------------------- */}
            <span
              className='string-js curly-brace'
              style={{ color: `${curlyBraceColor}` }}
            >{'    }'}</span>
            
            {/* PUNCTUATION -------------------- */}
            <span
              className='string-js punctuation'
              style={{ color: `${punctuationColor}` }}
            >, </span>
            
            {/* NUMBER */}
            <span
              className='string-js number'
              style={{ color: `${numberColor}` }}
            >500</span>
            
            {/* ROUND BRACE -------------------- */}
            <span
              className='string-js round-brace'
              style={{ color: `${roundBraceColor}` }}
            >)</span>

            {/* PUNCTUATION -------------------- */}
            <span
              className='string-js punctuation'
              style={{ color: `${punctuationColor}` }}
            >;</span><br />

            {/* CURLY BRACE -------------------- */}
            <span
              className='string-js curly-brace'
              style={{ color: `${curlyBraceColor}` }}
            >{'}'}</span>
            
            {/* PUNCTUATION -------------------- */}
            <span
              className='string-js punctuation'
              style={{ color: `${punctuationColor}` }}
            >;</span><br /><br />

            {/* FUNCTION NAME -------------------- */}
            <span
              className='string-js function-name'
              style={{ color: `${funcNameColor}` }}
            >themeCount</span>
            
            {/* ROUND BRACE -------------------- */}
            <span
              className='string-js round-brace'
              style={{ color: `${roundBraceColor}` }}
            >(</span>
            
            {/* STRING -------------------- */}
            <span
              className='string-js string'
              style={{ color: `${stringColor}` }}
            >'color theme'</span>
            
            {/* ROUND BRACE -------------------- */}
            <span
              className='string-js round-brace'
              style={{ color: `${roundBraceColor}` }}
            >)</span>

            {/* PUNCTUATION -------------------- */}
            <span
              className='string-js punctuation'
              style={{ color: `${punctuationColor}` }}
            >;</span>
          </code>
        </pre>
      </div>
    </div>
  );
}

export default MiniTextEditor;
