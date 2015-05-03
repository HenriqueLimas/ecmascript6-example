var gulp = require('gulp');
var babel = require('gulp-babel');

var connect = require('gulp-connect');

var del = require('del');

gulp.task('default', ['6to5', 'connect'], function() {});

gulp.task('clean:dist', function(cb) {
    del(['dist'], cb);
});

gulp.task('babel', ['clean:dist'], function() {
    return gulp.src(['src/**/*.js'])
        .pipe(babel({
            modules: 'amd'
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('connect', function() {
    connect.server({
        port: 8000
    });
});
