module.exports = {
  extends: [
    './rules/color.js',
    './rules/font.js',
    './rules/function.js'
  ].map(require.resolve)
};
