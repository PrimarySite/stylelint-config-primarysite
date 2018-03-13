module.exports = {
  rules: {
    'custom-property-empty-line-before': 'never',
    'custom-property-pattern': [
      '^[a-z][a-zA-Z]+$',
      { message: 'Expected custom property name format to be lowerCamelCase' }
    ],
    'property-blacklist': null,
    'property-case': 'lower',
    'property-no-unknown': [true, {
      checkPrefixed: true,
      ignoreProperties: ['composes']
    }],
    'property-no-vendor-prefix': true,
    'property-whitelist': null,
    'shorthand-property-no-redundant-values': true
  }
};
