module.exports = {
  extends: [
    './rules/color.js',
    './rules/font.js'
  ].map(require.resolve)
};
