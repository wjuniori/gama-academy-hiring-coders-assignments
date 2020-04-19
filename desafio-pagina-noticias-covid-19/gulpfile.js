"use strict";

// Load plugins
const del = require("del");
const gulp = require("gulp");
const mergeStream = require("merge-stream");
const imagemin = require("gulp-imagemin");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const header = require("gulp-header");
const rename = require("gulp-rename");
const browsersync = require("browser-sync").create();
const uglify = require("gulp-uglify");

// Load package.json for banner
const pkg = require("./package.json");

// Set the banner content
const banner = [
  "/*!\n",
  " * <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n",
  " * Copyright " + new Date().getFullYear(),
  " <%= pkg.author %>\n",
  " */\n",
  "\n",
].join("");

// File Source Directories
const htmlFiles = ["./**/*.html"];
const cssFiles = [
  "./public/dist/css/**/*.css",
  "!./public/dist/css/**/*.min.css",
];
const jsFiles = ["./public/dist/js/**/*.js", "!./public/dist/js/**/*.min.js"];
const imgFiles = [
  "./public/dist/img/originals/**/*.jpg",
  "./public/dist/img/originals/**/*.jpeg",
  "./public/dist/img/originals/**/*.gif",
  "./public/dist/img/originals/**/*.png",
  "./public/dist/img/originals/**/*.svg",
];

// File Target Directories
const targetDirectory = "./public/dist/";

// Clean vendor
function cleanVendor() {
  return del(["./vendor/"]);
}

// Bring third party dependencies from node_modules into vendor directory
function modules() {
  // normalize.css
  const normalize = gulp
    .src("./node_modules/normalize.css/normalize.css")
    .pipe(gulp.dest("./vendor/normalize.css"));

  // Font Awesome CSS
  const fontAwesomeCSS = gulp
    .src("./node_modules/@fortawesome/fontawesome-free/css/**/*")
    .pipe(gulp.dest("./vendor/fontawesome-free/css"));

  // Font Awesome Webfonts
  const fontAwesomeWebfonts = gulp
    .src("./node_modules/@fortawesome/fontawesome-free/webfonts/**/*")
    .pipe(gulp.dest("./vendor/fontawesome-free/webfonts"));

  return mergeStream(normalize, fontAwesomeCSS, fontAwesomeWebfonts);
}

// Clean img
function cleanImg() {
  return del([targetDirectory + "img/**", "!./public/dist/img/originals"]);
}

// Image task (Minify)
function imageMin() {
  return gulp
    .src(imgFiles)
    .pipe(imagemin())
    .pipe(gulp.dest(targetDirectory + "img/"));
}

// CSS task (Minify)
function css() {
  return gulp
    .src(cssFiles)
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(cleanCSS())
    .pipe(
      header(banner, {
        pkg: pkg,
      })
    )
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(gulp.dest(targetDirectory + "css"))
    .pipe(browsersync.stream());
}

// JS task (Minify)
function js() {
  return gulp
    .src(jsFiles)
    .pipe(uglify())
    .pipe(
      header(banner, {
        pkg: pkg,
      })
    )
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(gulp.dest(targetDirectory + "js"))
    .pipe(browsersync.stream());
}

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./",
    },
    port: 3000,
  });
  done();
}

// BrowserSync reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Watch files
function watchFiles() {
  gulp.watch(cssFiles, css);
  gulp.watch(jsFiles, js);
  gulp.watch(imgFiles, build);

  // Caso não tenha uma task definida:
  gulp.watch(htmlFiles, browserSyncReload);
}

// Define complex tasks
const vendor = gulp.series(cleanVendor, modules);
const img = gulp.series(cleanImg, imageMin);
const build = gulp.series(
  gulp.parallel(vendor, img),
  gulp.parallel(css, js) /*, html*/
);
const watch = gulp.series(build, gulp.parallel(browserSync, watchFiles));

// Export tasks
exports.default = build;
exports.watch = watch;
exports.css = css;
exports.js = js;
exports.img = img;
exports.vendor = vendor;
