module.exports = {
  rules: {
    'rule-empty-line-before': [
      'always',
      {
        except: ['after-single-line-comment', 'first-nested', 'inside-block-and-after-rule'],
        ignore: 'after-comment'
      }
    ]
  }
};
