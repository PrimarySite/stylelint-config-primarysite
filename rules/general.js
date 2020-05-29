module.exports = {
  rules: {
    indentation: [2, { baseIndentLevel: 1, except: 'param', indentClosingBrace: false }],
    linebreaks: 'unix',
    'max-empty-lines': 1,
    'max-line-length': 100,
    'max-nesting-depth': 0,
    'no-descending-specificity': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': [true, { disallowInList: false }],
    'no-empty-first-line': true,
    'no-empty-source': true,
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'no-missing-end-of-source-newline': true,
    'no-unknown-animations': true,
    'unicode-bom': 'never'
  }
};
