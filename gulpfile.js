var gulp = require('gulp'),
	browserify = require('gulp-browserify'),
	rename = require('gulp-rename'),
	path = require('path');

var paths = {
	distFolder: './dist/',
	jsSrcFolder: './src/js/',
	cssSrcFolder: './src/less/',

	appEntryFile: 'app.js',
	lessEntryFile: 'styles.less',
	appBuildFile: 'app.js',
	cssBuildFIle: 'styles.css'
};

gulp.task('js', function(){
	gulp.src(path.join(paths.jsSrcFolder, paths.appEntryFile))
	.pipe(browserify())
	.pipe(rename(paths.appBuildFile))
	.pipe(gulp.dest(path.join(paths.distFolder)))
});