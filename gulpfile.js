const gulp = require('gulp'),
      sass = require('gulp-sass'),
      browserSync = require('browser-sync').create(),
      uglifyCss = require('gulp-uglifycss')

  

gulp.task('sass', function(){
   return gulp.src('./app/src/styles/**/*.scss')
              .pipe(sass()
              .on('error', sass.logError))           
              .pipe(gulp.dest('./app/temp/style'))
              .pipe(browserSync.stream())
    })


gulp.task('scripts', function(){
   return gulp.src('./app/src/scripts/*.js')
              .pipe(gulp.dest('./app/temp/script'))
})




// watch all Sass files 
// and run the sass task whenever a Sass file is saved
gulp.task('watch', function(){
  browserSync.init({
    notify: false,
    server: {
      baseDir: './'
    },
  })

  gulp.watch('./app/*.html', browserSync.reload)
  gulp.watch('./app/src/styles/**/*.scss', ['sass'])
  gulp.watch('./app/src/scripts/**/*.js', browserSync.reload)
}) 
