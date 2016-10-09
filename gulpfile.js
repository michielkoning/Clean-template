var config = {
  assetsDir: './assets/',
  bowerDir: './src/bower_components' 
};

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var nunjucksRender = require('gulp-nunjucks-render');
var gutil = require('gulp-util');
var data = require('gulp-data');
var mainBowerFiles = require('main-bower-files');
var filter = require('gulp-filter');
var bower = require('gulp-bower');

gulp.task('bower', function() { 
    return bower()
      .pipe(gulp.dest(config.bowerDir)) 
});

// SASS
gulp.task('sass', function () {
  return gulp.src([
      'src/sass/style.scss'
    ])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
      flexbox: 'no-2009',
    }))

    .pipe(cleanCSS({
        keepSpecialComments: false,
      }
    ))
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.stream());
});

gulp.task('scripts', function() {

  var jsFiles = ['src/scripts/_*.js', 'src/scripts/*.js'];
  return gulp.src(mainBowerFiles('**/*.js').concat(jsFiles))
    .pipe(concat('functions.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.assetsDir + 'scripts'));
});

gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('src/templates/*.nunjucks')
    // Adding data to Nunjucks
    .pipe(data(function() {
      return require('./src/data/data.json')
    }))
    // Renders template with nunjucks
    .pipe(nunjucksRender({
      path: ['src/templates/']
    }).on('error', gutil.log))
    // output files in app folder
    .pipe(gulp.dest('./'))
});

// default gulp task
gulp.task('default', ['sass', 'scripts', 'nunjucks']);

gulp.task('template', ['nunjucks']);

// gulp watch taks
gulp.task('watch', function () {

  browserSync.init({
    proxy: 'localhost/zee',
    port: 8080,
    open: false,
    notify: false,
    // injectChanges: false,
  });

  // Watch PHP files and Sass files
  gulp.watch([
    'src/sass/*.scss',
    'src/sass/**/*.scss',
    'src/data/data.json',
    'src/scripts/*.js',
    'src/templates/*.nunjucks',
    'src/templates/partials/*.nunjucks',
    ],
    [
      'sass',
      'scripts',
      'nunjucks',
    ]
  ).on('change', browserSync.reload);
});