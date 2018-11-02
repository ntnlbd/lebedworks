var gulp = require('gulp');
var watch = require('gulp-watch');

var source = '_site/assets',
    destination = '_includes';

gulp.task('watch-folder', function() {
  gulp.src(source + '/**/*', {base: source})
    .pipe(watch(source, {base: source}))
    .pipe(gulp.dest(destination))
});
