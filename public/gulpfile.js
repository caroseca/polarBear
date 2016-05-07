var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('styles', function(){
	gulp.src('styles.styl')
		.pipe(stylus())
		.pipe(gulp.dest('./'));
});

// watching for changes, once that's noticed, the task is run
gulp.task('watch:styles', function () {
  gulp.watch('**/*.styl',['styles']);
  });

gulp.task('default', ['watch:styles', 'styles']);