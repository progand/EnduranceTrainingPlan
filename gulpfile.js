var gulp = require('gulp'),
        templateCache = require('gulp-angular-templatecache'),
        concat = require('gulp-concat'),
        uglify = require('gulp-uglifyjs');

gulp.task('angular-templatecache', function () {
    gulp.src('public_html/templates/*.html')
            .pipe(templateCache({
                standalone: true,
                root: '/templates/',
                module: 'templates'
            }))
            .pipe(gulp.dest('public_html/build/compiled_templates'));
});

gulp.task('build', function () {
    gulp.src([
        'public_html/js/libs/*.js',
        'public_html/angular.js/angular.js/angular.js',
        'public_html/build/compiled_templates/*.js',
        'public_html/js/*.js'
    ])
            .pipe(concat('training-plan.js', {newLine: ';\n'}))
            .pipe(gulp.dest('public_html/build/'))
            .pipe(uglify('training-plan.min.js', {
                mangle: false
            }))
            .pipe(gulp.dest('public_html/build/'));
});

gulp.task('default', function () {
    gulp.watch('public_html/templates/*.html', ['angular-templatecache']);
});

