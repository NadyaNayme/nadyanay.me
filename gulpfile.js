var path = require("path");

var gulp = require("gulp");
var useref = require("gulp-useref");
var cleanCSS = require("gulp-clean-css");
var gulpif = require("gulp-if");
var cache = require("gulp-cache");
var uncache = require("gulp-uncache");
var htmlmin = require("gulp-htmlmin");
var imagemin = require("gulp-imagemin");
var sriHash = require("gulp-sri-hash");
var imageResize = require("gulp-image-resize");
var rename = require("gulp-rename");

var src = "src/";
var build = "public/";

gulp.task("minify-css", function() {
  return gulp
    .src(src + "/assets/css/**/*.css", {
      base: src
    })
    .pipe(cleanCSS())
    .pipe(gulp.dest(build));
});

gulp.task("minify-html", function() {
  return gulp
    .src(src + "**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(build))
    .pipe(sriHash())
    .pipe(gulp.dest(build));
});

gulp.task("generate-thumbnails", function() {
  gulp
    .src([src + "assets/images/desktop.png", src + "assets/images/laptop.png"])
    .pipe(
      imageResize({
        width: 496
      })
    )
    .pipe(
      rename(function(path) {
        path.basename += "-thumbnail";
      })
    )
    .pipe(gulp.dest(src + "assets/images/"));
});

gulp.task("optimize-images", function() {
  return gulp
    .src(src + "assets/images/**/*")
    .pipe(
      cache(
        imagemin({ optimizationLevel: 8, progressive: true, interlaced: true })
      )
    )
    .pipe(gulp.dest(build + "img"));
});

gulp.task("copy", function() {
  return gulp
    .src([src + "keybase.txt", src + "favicon.ico"])
    .pipe(gulp.dest(build));
});

gulp.task(
  "build",
  [
    "generate-thumbnails",
    "minify-css",
    "minify-html",
    "optimize-images",
    "copy"
  ],
  function() {
    process.chdir(src);

    return gulp
      .src("src/")
      .pipe(useref())
      .pipe(uncache())
      .pipe(gulp.dest(build));
  }
);
