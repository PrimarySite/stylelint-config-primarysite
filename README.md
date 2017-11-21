# PrimarySite's approach to CSS

## Getting started

    $ yarn install stylelint-config-primarysite stylelint

With your project's `.stylelintrc` file, extend 'stylelint-config-primarysite',
like so:

    {
       "extends": "stylelint-config-primarysite"
    }

Note: This package expects that postcss-cssnext is being used. If it's not, the
`selector-pseudo-class-blacklist` rule should be overridden with `null`.
