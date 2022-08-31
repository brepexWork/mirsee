const { series, parallel } = require('gulp');
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
gulp
gulp.task('serve', () => {
    browserSync.init({
        server: 'public'
    });
    browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task('autoprefixer', () => {
    return gulp.src('src/css/*.css')
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 20 version'],
        cascade: false
    }))
    .pipe(gulp.dest('public/css/'));
});

gulp.task('sasstocss', function() {
    return gulp.src('src/scss/*.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('src/css/'));
});

gulp.task('checkpref', () => {
    gulp.watch('src/css/*.css', series('autoprefixer'));
});

gulp.task('checksass', () => {
    gulp.watch('src/scss/*.scss', series('sasstocss'));
});

gulp.task('default', series(parallel('checksass', 'serve', 'checkpref')));








