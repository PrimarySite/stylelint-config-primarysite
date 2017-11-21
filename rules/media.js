module.exports = {
  rules: {
    'custom-media-pattern': [
      '^[a-z][a-zA-Z]+$',
      { message: 'Expected custom media name format to be lowerCamelCase' }
    ],
    'media-feature-name-blacklist': null,
    'media-feature-name-no-unknown': true,
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-name-whitelist': null
  }
};
