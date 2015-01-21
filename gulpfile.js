var gulp = require('gulp'),
        templateCache = require('gulp-angular-templatecache'),
        concat = require('gulp-concat');

gulp.task('default', function () {
    gulp.src('public_html/templates/**/*.html')
            .pipe(templateCache({
                standalone: true,
                root: '/templates/',
                module: 'trainingPlan'
            }))
            .pipe(gulp.dest('public_html/build/compiled_templates'));
    gulp.src(['public_html/js/app.js', 'public_html/build/compiled_templates/templates.js'])
            .pipe(concat('app.js'))
            .pipe(gulp.dest('./public_html/build/'));
});


