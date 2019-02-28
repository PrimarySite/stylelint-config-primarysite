const postcssImportExists = (() => {
  try {
    require.resolve('postcss-import');
  } catch (e) {
    return false;
  }

  return true;
})();

module.exports = {
  rules: {
    'at-rule-blacklist': postcssImportExists ? null : 'import',
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment']
      }
    ],
    'at-rule-name-case': 'lower',
    'at-rule-name-newline-after': null,
    'at-rule-name-space-after': 'always',
    'at-rule-no-unknown': true,
    'at-rule-no-vendor-prefix': true,
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-semicolon-space-before': 'never',
    'at-rule-whitelist': null
  }
};
