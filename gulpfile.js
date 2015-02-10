var gulp = require('gulp');
var to5 = require('gulp-6to5');

var del = require('del');

gulp.task('default',['6to5'] , function() {
});

gulp.task('clean:dist', function(cb) {
	del(['dist'], cb);
});

gulp.task('6to5', ['clean:dist'], function() {
	return gulp.src(['src/**/*.js'])
		.pipe(to5())
		.pipe(gulp.dest('dist'));
})