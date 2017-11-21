module.exports = {
  rules: {
    'selector-attribute-operator-blacklist': null,
    'selector-attribute-operator-whitelist': null,
    'selector-class-pattern': [
      '^([a-z][a-z]*)(-[a-z]+)*$',
      { message: 'Expected class selector format to be kebab-case', resolveNestedSelectors: true }
    ],
    'selector-id-pattern': [
      '^([a-z][a-z]*)(-[a-z]+)*$',
      { message: 'Expected id selector format to be kebab-case' }
    ],
    'selector-max-attribute': 1,
    'selector-max-class': 2,
    'selector-max-combinators': 1,
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: 'global' }],
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': true
  }
};
