# Test drive development - testing basics

A few simple functions that were built using test driven development (TDD) practices. This is a basic approach for the purpose of learning and understanding TDD:

* Writing a test that fails.

* Implementing function that passes the test (bare minimum, hardcoded if needed).

* Refactoring the code to remove duplicates and ensure it still passes the test.

### Personal notes

Even though I was following the TDD practices, The last step was usually a major leap, going from a code with bare minimum, to full-blown implementation of the function, which felt a little too steep of a jump.

The upside of this method that I first noticed is that if I want to test different values, I simply duplicate existing test. This not only lets me try a new value for testing purposes, but every previous test is still available and will be used. This is convenient as I do not need to juggle between values to see if previous ones are still passing the test.

### npm scripts

Below are the scripts that have been added to `package.json` file

`"test"`: runs `jester` to execute all test on created modules.

`"formatTest"`: runs `prettier` check on all files and `eslint` check on all files in `src` folder (no modifications).

`"formatFix"`: runs `eslint` with `--fix` option.

`"formatCheck"`: runs `prettier` with `--check` option to check if code is formated to set options.

`"formatWrite"`: runs `prettier` with `--write` option to format code to set options.
