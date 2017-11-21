module.exports = {
  rules: {
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'never',
    'declaration-colon-newline-after': null,
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': [
      'always',
      { except: ['after-comment', 'after-declaration', 'first-nested'] }
    ],
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-no-important': true,
    'declaration-property-unit-blacklist': {
      '/^animation/': ['ms'],
      'font-size': ['px'],
      '/^transition/': ['ms']
    },
    'declaration-property-unit-whitelist': { 'line-height': [] },
    'declaration-property-value-blacklist': null,
    'declaration-property-value-whitelist': null,
    'declaration-block-single-line-max-declarations': 1
  }
};
