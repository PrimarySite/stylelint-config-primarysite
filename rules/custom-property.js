module.exports = {
  rules: {
    'custom-property-pattern': [
      '^[a-z][a-zA-Z]+$',
      { message: 'Expected custom property name format to be lowerCamelCase' }
    ]
  }
};
