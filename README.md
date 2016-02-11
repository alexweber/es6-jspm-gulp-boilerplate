[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![Dependency Status](https://david-dm.org/alexweber/es6-jspm-gulp-boilerplate.svg)](https://david-dm.org/alexweber/es6-jspm-gulp-boilerplate) [![devDependency Status](https://david-dm.org/alexweber/es6-jspm-gulp-boilerplate/dev-status.svg)](https://david-dm.org/alexweber/es6-jspm-gulp-boilerplate#info=devDependencies)
# ES6 + JSPM + Gulp Boilerplate

> A boilerplate for developing ES6+ apps using JSPM & Gulp.

## JSPM

[JSPM](http://jspm.io/) is an all-in-one command line tool for package management, module loading and transpilation. Read more about it [here](http://www.joezimjs.com/javascript/simplifying-the-es6-workflow-with-jspm/) and [here](http://javascriptplayground.com/blog/2014/11/js-modules-jspm-systemjs/).

## Boilerplate Features

- Uses JSPM instead of Bower to manage packages
- Transpiles ES6+ automagically using [Babel](https://babeljs.io/) via JSPM
- Uses [SystemJS](https://github.com/systemjs/systemjs) to load modules via JSPM
- SASS compilation using [LibSass](http://libsass.org/) and [Autoprefixer](https://github.com/postcss/autoprefixer)
- Local dev server with [LiveReload](http://livereload.com/) using [Gulp Connect](https://github.com/avevlad/gulp-connect)
- Testing using [Karma](http://karma-runner.github.io/) with [Mocha](http://mochajs.org/) + [Chai](http://chaijs.com/) (bonus: write your tests in ES6)
- Linting with [ESLint](http://eslint.org/) and [SCSS-Lint](https://github.com/brigade/scss-lint)
- Generates documentation automatically using [ESDoc](https://esdoc.org/) and [SassDoc](http://sassdoc.com/)
- [Unlicensed](http://unlicense.org/)

## Usage

1. Clone this repo from `https://github.com/alexweber/es6-jspm-gulp-boilerplate.git` or install via npm: `npm install es6-jspm-gulp-boilerplate`
2. Run `npm install` in the root directory (will automatically run `jspm install`)
3. Run `gulp` or `npm start` to start the local dev server (you may need to install Gulp locally using `npm install -g gulp`)
4. Write an awesome app! ☺

## Testing

Run `karma start` or `npm test` to run tests once.

Run `npm run test:watch` to run tests continuously.

## Generating documentation

Run `npm run docs` to generate documentation for your JavaScript and SASS automatically in the `docs` folder.

## Building

Run `gulp build` or `npm run build` to build the app for distribution in the `dist` folder.

## Updating

In the event of issues running `npm install` after updating to the latest version of the boilerplate, I recommend you `rm -rf node_modules`, re-run `npm install` and go grab some coffee while it runs :)

## Contributing

If you like this/find it useful/find a bug please open an [issue](https://github.com/alexweber/es6-jspm-gulp-boilerplate/issues) and, better yet, submit a Pull Request! ☺ Any and all help appreciated, thanks!

---

[No rights reserved](http://unlicense.org/). Made with ♥ by [Alex Weber](https://twitter.com/alexweber15)
