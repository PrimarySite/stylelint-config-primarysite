module.exports = {
  rules: {
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-no-important': true,
    'declaration-property-unit-blacklist': { '/^animation/': ['ms'], 'font-size': ['px'], '/^transition/': ['ms'] },
    'declaration-property-unit-whitelist': { 'line-height': [] },
    'declaration-property-value-blacklist': null,
    'declaration-property-value-whitelist': null,
    'declaration-block-single-line-max-declarations': 1
  }
};
