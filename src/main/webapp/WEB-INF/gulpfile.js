// Initialize modules
const {
    src,
    dest,
    watch,
    series,
    parallel
} = require('gulp');

const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require("gulp-postcss");
const concat = require("gulp-concat");
const replace = require("gulp-replace");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const terser = require('gulp-terser');

// File path variables
const files = {
    scssPath: 'css/**/*.scss',
    jsFuncPath: 'js/functions/**/*.js',
    jsPluginPath: 'js/plugins/**/*.js',
}
// Sass tasks
function scssTask() {
    //automatsko nalazenje sass fajlova ↓
    return src(files.scssPath)
        //vracanje nazad css fajla u sass fajl ↓
        .pipe(sourcemaps.init())
        //kompajliranje sass u css ↓
        .pipe(sass())
        //dodavanje prefiksa i cssminify ↓
        .pipe(postcss([autoprefixer(), cssnano()]))
        //fizicko materijalizovanje sourcemapa u fajl ↓
        .pipe(sourcemaps.write('.'))
        // kreiranje i cuvanje finalnih css i js fajla ↓
        .pipe(dest('css')

        );
}
// js task
function jsFuncTask() {
    //automatsko nalazenje js fajlova ↓
    return src(files.jsFuncPath)
        // konkatenacija vise js fajla u jedan ↓
        .pipe(concat('functions.js'))
        // .pipe(terser({}, terser.minify))
        .pipe (terser())
        .pipe(dest('js/bundles'));
}

function jsPluginTask() {
    //automatsko nalazenje js fajlova ↓
    return src(files.jsPluginPath)
        // konkatenacija vise js fajla u jedan ↓
        .pipe(concat('plugins.js'))
        // .pipe(terser({}, terser.minify))
        // .pipe (terser())
        .pipe(dest('js/bundles'));
}

// cachebusting task
const CbString = new Date().getTime();

function cacheBustTask() {
    return src(['./view/templates/*.jsp'])
        // menja query string (cb=123) svaki put u script i link tagu
        .pipe(replace(/cb=\d+/g, 'cb=' + CbString))
        .pipe(dest('view/templates'));
}

// watch task
function watchTask() {
    watch(files.scssPath, scssTask);
   watch(files.jsFuncPath,jsFuncTask);
   watch(files.jsPluginPath,jsPluginTask);
}


// default task (omogucava pokretanje taska iz konzole)
exports.default = series(
    parallel(scssTask, jsPluginTask,jsFuncTask),
    cacheBustTask,
    watchTask
);