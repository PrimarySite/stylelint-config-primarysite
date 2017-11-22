module.exports = {
  plugins: ['stylelint-order'],
  rules: {
    'order/order': [['custom-properties', 'at-rules', 'declarations'], { unspecified: 'bottom' }],
    'order/properties-order': [
      [
        'grid-area',
        'grid-column',
        'grid-row',
        'display',
        'grid',
        'grid-template-areas',
        'grid-template-columns',
        'grid-template-rows',
        'grid-gap',
        'grid-column-gap',
        'grid-row-gap',
        'flex',
        'flex-flow',
        'flex-direction',
        'flex-wrap',
        'align-content',
        'align-items',
        'align-self',
        'justify-content',
        'justify-items',
        'justify-self',
        'table-layout',
        'position',
        'top',
        'right',
        'bottom',
        'left',
        'z-index',
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height',
        'box-sizing',
        'content',
        'opacity',
        'float',
        'clear',
        'overflow',
        'overflow-x',
        'overflow-y',
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',
        'border',
        'border-top',
        'border-right',
        'border-bottom',
        'border-left',
        'border-color',
        'border-radius',
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'box-shadow',
        'font',
        'font-family',
        'font-size',
        'font-style',
        'font-weight',
        'line-height',
        'text-align',
        'text-decoration',
        'text-indent',
        'text-overflow',
        'text-shadow',
        'white-space',
        'color',
        'background',
        'background-color',
        'background-image',
        'background-size',
        'list-style',
        'vertical-align',
        'cursor',
        'resize',
        'transition',
        'transform',
        'overflow-scrolling'
      ],
      { unspecified: 'bottom' }
    ]
  }
};