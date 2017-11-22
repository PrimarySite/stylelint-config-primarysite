module.exports = {
  extends: [
    './rules/at.js',
    './rules/block.js',
    './rules/colour.js',
    './rules/comment.js',
    './rules/declaration.js',
    './rules/font.js',
    './rules/function.js',
    './rules/general.js',
    './rules/length.js',
    './rules/media.js',
    './rules/number.js',
    './rules/order.js',
    './rules/property.js',
    './rules/rule.js',
    './rules/selector.js',
    './rules/string.js',
    './rules/time.js',
    './rules/unit.js',
    './rules/value.js'
  ].map(require.resolve)
};
