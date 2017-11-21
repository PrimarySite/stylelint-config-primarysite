module.exports = {
  rules: {
    'selector-attribute-operator-blacklist': null,
    'selector-attribute-operator-whitelist': null,
    'selector-class-pattern': '\.[a-z]+(-[a-z]+)*', { resolveNestedSelectors: true },
    'selector-id-pattern': '\#[a-z]+(-[a-z]+)*',
    'selector-max-attribute': 1,
    'selector-max-class': 1,
    'selector-max-combinators': 1,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': true
  }
};
