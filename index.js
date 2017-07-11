module.exports = {
  extends: [
    './rules/colour.js',
    './rules/font.js',
    './rules/function.js'
  ].map(require.resolve)
};
