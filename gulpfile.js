var gulp = require('gulp'),
        templateCache = require('gulp-angular-templatecache'),
        concat = require('gulp-concat');

gulp.task('default', function () {
    gulp.src('public_html/templates/**/*.html')
            .pipe(templateCache({
                standalone: true,
                root: '/templates/',
                module: 'templates'
            }))
            .pipe(gulp.dest('public_html/build/compiled_templates'));
});


