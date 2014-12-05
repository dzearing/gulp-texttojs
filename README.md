# [gulp](https://github.com/gulpjs/gulp)-texttojs
> Converts text files into JavaScript.

## Install

Install with [npm](https://npmjs.org/package/gulp-texttojs)

```
$ npm install --save-dev gulp-texttojs
```

## Description

Converts a text file (css, html, etc) into a javascript file, which by default is exported as an amd module, but
can be tweaked to do anything you want with the file as a javscript string.

## Usage

```js
var gulp = require('gulp'),
    texttojs = require('gulp-texttojs');

gulp.task('default', function() {
    return gulp.src('src/*.css')
        .pipe(texttojs()
        .pipe(gulp.dest('dist'));
});
```

Input (file.txt):
```text
Hello, "world!"
```

Output (file.txt.js):
```javascript
define([], function() { return "Hello, \"world!\""; });
```

## API

### texttojs(options)

#### options.template
Type: `String`
Default: `define([], function() { return <%= content %>; });`

You can use <%= content %> to place the text file string content. By default the file is converted into an AMD export.

#### options.ext
Type: 'String'
Default: `.js`

Use this to output a different extension.
## License

MIT © [David Zearing](http://github.com/dzearing)
