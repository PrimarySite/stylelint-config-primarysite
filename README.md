# PrimarySite's approach to CSS

## Getting started

    $ yarn install stylelint-config-primarysite stylelint

With your project's `.stylelintrc` file, extend 'stylelint-config-primarysite',
like so:

    {
       "extends": "stylelint-config-primarysite"
    }

*Note*: This package expects that `postcss-cssnext` is being used. If it's not,
the following rules should be used in your config to override this package:

    'at-rule-blacklist': 'import',
    'selector-pseudo-class-blacklist': null

## Helpful Tip

- Consider adding `--formatter verbose` to the `stylelint` script in `package.json`.

  For example:
  ```
  "lint": "eslint 'components/**/*.js' 'utilities/**/*.js' && stylelint 'components/**/*.css' --formatter verbose"
  ```

  This will give you a summary of the files linted and any errors encountered.

- When specifying the version of `stylelint` in `package.json`, prefix the version number with `~` (tilde) instead of a `^` (caret) as per the [`stylelint` semantic versioning policy](https://stylelint.io/#semantic-versioning-policy).