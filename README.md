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

- Consider adding `--report-invalid-scope-disables --report-needless-disables --formatter verbose`
  to the `stylelint` script in `package.json`.

  For example:

      "lint": "stylelint 'src/**/*.{css,html}' --formatter verbose"

This will give you a summary of the files linted and any errors encountered.

- When specifying the version of `stylelint` in `package.json`, prefix the version number with `~`
  (tilde) instead of a `^` (caret) as per the
  [`stylelint` semantic versioning policy](https://stylelint.io/#semantic-versioning-policy).
