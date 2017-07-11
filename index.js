module.exports = {
  extends: [
    './rules/colour.js',
    './rules/font.js',
    './rules/function.js',
    './rules/length.js',
    './rules/number.js',
    './rules/string.js',
    './rules/time.js',
    './rules/unit.js'
  ].map(require.resolve)
};
