module.exports = {
  rules: {
    'rule-empty-line-before': [
      'always',
      {
        except: ['after-single-line-comment', 'first-nested'],
        ignore: 'after-comment'
      }
    ]
  }
};
