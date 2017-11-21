module.exports = {
  rules: {
    'indentation': [2, { except: 'param', indentClosingBrace: false }],
    'max-empty-lines': 1,
    'max-line-length': [99, { ignorePattern: '/https?:\/\/[0-9,a-z]*.*/' }],
    'max-nesting-depth': 0,
    'no-descending-specificity': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'no-missing-end-of-source-newline': true,
    'no-unknown-animations': true
  }
};
