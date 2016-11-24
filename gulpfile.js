'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');


// compile sass
gulp.task('convert sass', function() {
	gulp.src('./public/stylesheets/style.scss')
	.pipe(sass())
	.pipe(gulp.dest('./public/stylesheets'));

});


// watch sass task
gulp.task('watch gulp', function() {
	gulp.watch(['./public/stylesheets/style.scss'], ['convert sass']);
});



// nodemon it up!
gulp.task('Nodemon', restartServer);

function restartServer() {
    nodemon({
        script: './bin/www',
        ext: 'js hbs scss sql'
    });
};




gulp.task('default', ['Nodemon', 'convert sass', 'watch gulp']);