module.exports = {
  rules: {
    'unit-blacklist': [
      ['ch', 'cm', 'em', 'in', 'mm', 'pc', 'pt'],
      {
        ignoreMediaFeatureNames: {
          'em': ['/height$/', '/width$/']
        }
      }
    ],
    'unit-case': 'lower',
    'unit-no-unknown': true,
    'unit-whitelist': null
  }
};
