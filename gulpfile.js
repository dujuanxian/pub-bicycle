var gulp = require('gulp');
var browserify = require('gulp-browserify');
var sass = require('gulp-ruby-sass');
var del = require('del');
var minifyCss = require('gulp-minify-css');
var webserver = require('gulp-webserver');
var uglify = require('gulp-uglify');

gulp.task('browserify', function(){
    gulp.src('src/js/app.js')
        .pipe(browserify({
            transform: 'reactify'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('sass', function () {
    return sass('src/css/app.scss')
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('font', function() {
    gulp.src('src/font/*.*')
        .pipe(gulp.dest('dist/font'));
});

gulp.task('html', function() {
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['clean', 'browserify', 'font', 'sass', 'html', 'serve', 'watch']);

gulp.task('clean', function () {
    del.sync(['dist/*']);
});

gulp.task('watch', function() {
    gulp.watch('src/css/*.*', ['sass']);
    gulp.watch('src/js/*.*', ['browserify']);
    gulp.watch('src/index.html', ['html']);
});

gulp.task('serve', function() {
    gulp.src('./dist')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});
