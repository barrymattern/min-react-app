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
  let themeJson =
  {
    "editor.tokenColorCustomizations": {
      "[Default Dark+]": {
        "textMateRules": [
          { // Comments
            "scope": [
              "comment.line.double-slash.js",
              "comment.block.js",
              "comment.block.documentation.js"
            ],
            "settings": {
              "foreground": commentColor
            }
          },
          { // Function Keyword
            "scope": [
              "storage.type.function.js"
            ],
            "settings": {
              "foreground": funcKeywordColor
            }
          },
          { // Function Names
            "scope": [
              "entity.name.function.js",
              "support.function.js"
            ],
            "settings": {
              "foreground": funcNameColor
            }
          },
          { // Round Braces
            "scope": [
              "meta.brace.round.js"
            ],
            "settings": {
              "foreground": roundBraceColor
            }
          },
          { // Curly Braces
            "scope": [
              "meta.brace.curly.js"
            ],
            "settings": {
              "foreground": curlyBraceColor
            }
          },
          { // Square Braces
            "scope": [
              "meta.brace.square.js"
            ],
            "settings": {
              "foreground": "#235C6C"
            }
          },
          { // Parameters
            "scope": [
              "variable.parameter"
            ],
            "settings": {
              "foreground": parameterColor
            }
          },
          { // Let / Const
            "scope": [
              "storage.type.js"
            ],
            "settings": {
              "foreground": letConstColor
            }
          },
          { // Variables
            "scope": [
              "variable.other.readwrite.js",
              "variable.other.constant.object.js",
              "support.variable"
            ],
            "settings": {
              "foreground": variableColor
            }
          },
          { // Operators
            "scope": [
              "keyword.operator"
            ],
            "settings": {
              "foreground": operatorColor
            }
          },
          { // Numbers
            "scope": [
              "constant.numeric.js"
            ],
            "settings": {
              "foreground": numberColor
            }
          },
          { // Punctuation Terminator
            "scope": [
              "punctuation.terminator.statement.js"
            ],
            "settings": {
              "foreground": punctuationColor
            }
          },
          { // Comma Delimeter
            "scope": [
              "meta.delimiter.comma.js"
            ],
            "settings": {
              "foreground": punctuationColor
            }
          },
          { // Fat Arrow
            "scope": [
              "storage.type.function.arrow.js"
            ],
            "settings": {
              "foreground": fatArrowColor
            }
          },
          { // Methods
            "scope": [
              "entity.name.function"
            ],
            "settings": {
              "foreground": methodColor
            }
          },
          { // Strings
            "scope": [
              "string.quoted.single.js",
              "string.quoted.double.js",
              "string.quoted.template.js"
            ],
            "settings": {
              "foreground": stringColor
            }
          }
        ]
      }
    }
  };

  // TODO: Define function to remove first/last curly brace

  return JSON.stringify(themeJson);
};
