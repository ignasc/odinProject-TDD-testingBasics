# Webpack template

A generic webpack template for html, css and javascript. This is the template that I will be using for my personal projects and will update it as needed.

### Important notes

Make sure to modify the command line of `"deploy"` script to refer to correct github branch used for production. Default set is `gh-pages`.

### npm scripts

Below are the scripts that have been added to `package.json` file

`"formatTest"`: runs `prettier` check on all files and `eslint` check on all files in `src` folder (no modifications).

`"formatFix"`: runs `eslint` with `--fix` option.

`"formatCheck"`: runs `prettier` with `--check` option to check if code is formated to set options.

`"formatWrite"`: runs `prettier` with `--write` option to format code to set options.
