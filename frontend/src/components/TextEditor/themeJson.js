// JSON theme data
export const replaceHexColor = (
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
) => {
  let themeJson = {
    "editor.tokenColorCustomizations": {
      "[Default Dark+]": {
        textMateRules: [
          {
            // Comments
            scope: [
              "comment.line.double-slash",
              "comment.block",
              "comment.block.documentation",
            ],
            settings: {
              foreground: commentColor,
            },
          },
          {
            // Function Keyword
            scope: ["storage.type.function"],
            settings: {
              foreground: funcKeywordColor,
            },
          },
          {
            // Function Names
            scope: [
              "entity.name.function",
              "meta.function",
              "support.function",
              "entity.other.attribute-name", // HTML attribute
              "entity.other.attribute-name.id.css", // HTML id attribute CSS
              "variable.other.constant.property",
              "variable.other.constant",
              "entity.name.function.js",
              "entity.name.function",
              "keyword.control",
              "support.class",
            ],
            settings: {
              foreground: funcNameColor,
            },
          },
          {
            // Round Braces
            scope: ["meta.brace.round"],
            settings: {
              foreground: roundBraceColor,
            },
          },
          {
            // Curly Braces
            scope: ["meta.brace.curly"],
            settings: {
              foreground: curlyBraceColor,
            },
          },
          {
            // Square Braces
            scope: ["meta.brace.square"],
            settings: {
              foreground: curlyBraceColor,
            },
          },
          {
            // Parameters
            scope: [
              "variable.parameter",
              "constant.language", // booleans, null, etc.
            ],
            settings: {
              foreground: parameterColor,
            },
          },
          {
            // Let / Const
            scope: [
              "storage.type",
              "punctuation.definition.tag", // Tag brackets, '</>'
              "support.type",
              "keyword.operator.new", // Keyword "new"
              "support.type.property-name.css", // Property name CSS
            ],
            settings: {
              foreground: letConstColor,
            },
          },
          {
            // Variables
            scope: [
              "variable.other.readwrite",
              "variable.other.constant.object",
              "support.variable",
              "entity.name.tag", // HTML element tag
              "entity.name.tag.css", // HTML element tag CSS
              "support.constant.property-value.css", // Property value CSS
              "support.type.property-name", // JSON string
              "variable",
            ],
            settings: {
              foreground: variableColor,
            },
          },
          {
            // Operators
            scope: ["keyword.operator"],
            settings: {
              foreground: operatorColor,
            },
          },
          {
            // Numbers
            scope: [
              "constant.numeric",
              "variable.language.this" // 'this' keyword
            ],
            settings: {
              foreground: numberColor,
            },
          },
          {
            // Punctuation Terminator
            scope: ["punctuation.terminator.statement"],
            settings: {
              foreground: punctuationColor,
            },
          },
          {
            // Comma Delimeter
            scope: ["meta.delimiter.comma"],
            settings: {
              foreground: punctuationColor,
            },
          },
          {
            // Fat Arrow
            scope: [
              "storage.type.function.arrow",
              "punctuation.section.embedded", // JSX comment braces, '{}'
              "entity.other.attribute-name.pseudo-class.css", // Pseudo class CSS
              "entity.other.attribute-name.pseudo-element.css", // Pseudo class CSS
            ],
            settings: {
              foreground: fatArrowColor,
            },
          },
          {
            // Method & Keyword Control
            scope: [
              "entity.name.function",
              "keyword.control", // 'import', 'from', 'return', etc.
              "support.class", // React component
              "entity.other.attribute-name.class.css", // HTML class attribute CSS
              "constant.other.color.rgb-value.hex.css", // Hex value CSS
              "keyword.other.unit", // Unit value CSS
              "support.constant.font-name", // Font name CSS
              "support.constant.color", // Color CSS
            ],
            settings: {
              foreground: methodColor,
            },
          },
          {
            // Strings
            scope: [
              "string.quoted.single",
              "string.quoted.double",
              "string.quoted.template",
              "string",
              "entity.name.type.class", // Class names
            ],
            settings: {
              foreground: stringColor,
            },
          },
        ],
      },
    },
  };

  // TODO: Define function to remove first/last curly brace

  return JSON.stringify(themeJson);
};

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
