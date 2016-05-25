//old created by cara
// var gulp = require('gulp');
// var stylus = require('gulp-stylus');

// gulp.task('styles', function(){
// 	gulp.src('styles.styl')
// 		.pipe(stylus())
// 		.pipe(gulp.dest('./'));
// });


//new (05.24.2016) from shelby
var gulp = require('gulp');
var stylus = require('gulp-stylus');
var sass = require('gulp-sass');

gulp.task('styles', function() {
   return gulp.src('./sass/**/*.scss')
       .pipe(sass().on('error', sass.logError))
       .pipe(gulp.dest('./css/'));
});

//Watch task
gulp.task('default',function() {
   gulp.watch('sass/**/*.scss',['styles']);
});

// watching for changes, once that's noticed, the task is run
gulp.task('watch:styles', function () {
  gulp.watch('**/*.styl',['styles']);
  });

gulp.task('default', ['watch:styles', 'styles']);