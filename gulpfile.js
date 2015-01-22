var gulp = require('gulp'),
        templateCache = require('gulp-angular-templatecache'),
        concat = require('gulp-concat'),
        uglify = require('gulp-uglifyjs'),
        runSequence = require('run-sequence'),
        _ = require('lodash'),
        karma = require('karma').server;

gulp.task('angular-templatecache', function () {
    gulp.src('public_html/templates/*.html')
            .pipe(templateCache({
                standalone: true,
                root: '/templates/',
                module: 'templates'
            }))
            .pipe(gulp.dest('public_html/build/compiled_templates'));
});

gulp.task('scripts', function () {
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

gulp.task('build', function () {
    runSequence('angular-templatecache', 'test', 'scripts');
});

gulp.task('watch', function () {
    gulp.watch('public_html/templates/*.html', ['angular-templatecache']);
});


//one could also externalize common config into a separate file,
//ex.: var karmaCommonConf = require('./karma-common-conf.js');
var karmaCommonConf = {
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    files: [
        'public_html/js/libs/*.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'public_html/build/compiled_templates/*.js',
        'public_html/js/*.js',
        'test/*.spec.js'
    ]
};

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    karma.start(_.assign({}, karmaCommonConf, {singleRun: true}), done);
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
    karma.start(karmaCommonConf, done);
});



// Default Task
gulp.task('default', ['angular-templatecache', 'watch']);

