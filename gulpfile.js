var gulp = require('gulp');

var browserSync = require('browser-sync').create();

// TASKS ///////////////////////////////


gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'app',
		},
	})
})


// inject bower components
gulp.task('wiredep', function () {
  var wiredep = require('wiredep').stream;
  gulp.src('app/*.html')
    .pipe(wiredep())
    .pipe(gulp.dest('app'));
});

// WATCH ///////////////////////////////

gulp.task('watch', ['browserSync'], function(){
	gulp.watch('app/**/*.html', browserSync.reload); //watch for html changes
	gulp.watch('app/**/*.js', browserSync.reload); //watch for js changes
})