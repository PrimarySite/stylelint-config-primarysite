module.exports = {
  rules: {
    'alpha-value-notation': postcssPresetEnvExists
      ? // When postcss-preset-env supports the transpiling of percentages to numbers for opacity
        // then the opacity exception can be removed.
        ['percentage', { exceptProperties: ['opacity'] }]
      : 'number',
    'color-function-notation': 'modern',
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-named': 'never',
    'color-no-hex': null,
    'color-no-invalid-hex': true,
    'hue-degree-notation': 'number'
  }
};
