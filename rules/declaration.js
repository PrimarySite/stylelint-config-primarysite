module.exports = {
  rules: {
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-newline-after': null,
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': [
      'always',
      { except: ['after-comment', 'after-declaration', 'first-nested'] }
    ],
    'declaration-no-important': true,
    'declaration-property-unit-blacklist': {
      '/^animation/': ['ms'],
      '/^transition/': ['ms'],
      'font-size': ['px']
    },
    'declaration-property-unit-whitelist': { 'line-height': [] },
    'declaration-property-value-blacklist': null,
    'declaration-property-value-whitelist': null,
    'keyframe-declaration-no-important': true
  }
};
