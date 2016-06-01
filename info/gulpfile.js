var gulp = require('gulp');
gulp.task("hello",function(){
  console.log("hey im logged");
});

var ts = require('gulp-typescript');

gulp.task('default', function () {
    return gulp.src('app/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            out: ''
        }))
        .pipe(gulp.dest('app/**/'));
});
