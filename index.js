module.exports = {
  extends: [
    './rules/color.js'
  ].map(require.resolve);
};
