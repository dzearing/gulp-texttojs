# [gulp](https://github.com/gulpjs/gulp)-texttomodule
> Compiles text files into JavaScript or TypeScript AMD blocks so that they can be "required" and loaded on demand.

## Install

Install with [npm](https://npmjs.org/package/gulp-texttomodule)

```
$ npm install --save-dev gulp-texttomodule
```

## Description

Converts a text file (css, html, etc) into an amd module export. Useful for loading templates as AMD modules without depending on the requirejs text loader.

## Usage

```js
var gulp = require('gulp'),
    textToModule = require('gulp-texttomodule');

gulp.task('default', function() {
    return gulp.src('src/*.css')
        .pipe(textToModule({
            exportName: 'styles',
            moduleType: 'amd',
        }))
        .pipe(gulp.dest('dist'));
});
```

## API

### textToModule(options)

#### options.exportName
Type: `String`
Default: ``

#### options.dependency
Type: `String`
Default: ``

The library to require in the define block.

#### options.methodToCall
Type: `String`
Default: ``

The method to call with the text as a string input.

## License

MIT © [David Zearing](http://github.com/dzearing)
