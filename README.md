# PrimarySite's approach to CSS

## Getting started

    $ yarn install stylelint-config-primarysite stylelint

With your project's `.stylelintrc` file, extend 'stylelint-config-primarysite', like so:

    {
       "extends": "stylelint-config-primarysite"
    }

_Note_: Installing this package's optional `peerDependencies` will change the behaviour of some of
the rules to account for the additional features provided by the optional dependencies.

## Helpful Tips

- Here is an example script that you can use in your project:

      "lint": "stylelint 'src/**/*.{css,html}' --report-needless-disables --formatter verbose"

- When specifying the version of `stylelint` in `package.json`, prefix the version number with `~`
  (tilde) instead of a `^` (caret) as per the
  [`stylelint` semantic versioning policy](https://stylelint.io/#semantic-versioning-policy).
