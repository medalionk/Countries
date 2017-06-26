"use strict";
let gulp = require("gulp");
let webpackStream = require('webpack-stream');
let ts = require('gulp-typescript');
let less = require('gulp-less');
let plumber = require('gulp-plumber');
let LessPluginAutoPrefix = require('less-plugin-autoprefix');
let autoprefix = new LessPluginAutoPrefix({ remove: false, browsers: ['> 1%', 'last 2 versions'] });

gulp.task('ts', function () {
    var tsAppProject = ts.createProject('wwwroot/scripts/ts/tsconfig.json');
    var tsResult = tsAppProject.src()
                .pipe(tsAppProject());
    return tsResult.js.pipe(gulp.dest('wwwroot/scripts/_compile'));
});

gulp.task('scripts', ['ts'], function() {
    var webPackConfig = {
        target: 'web',
        output: {
            filename: 'app.js',
            library: ['app'],
            libraryTarget: 'var' 
        },
        plugins: [],
        externals: {
            "jquery": "$"
        }        
    };
    return gulp.src('wwwroot/scripts/_compile/app.js')
               .pipe(webpackStream( webPackConfig ))
               .pipe(gulp.dest('wwwroot/static/'));
});

gulp.task('styles', function () {
    return gulp.src('wwwroot/styles/*.less')
                .pipe(plumber({ errorHandler: (error) => { console.log(error); this.emit("end"); } }))
                .pipe(less({ plugins: [autoprefix] }))
                .pipe(gulp.dest('wwwroot/static/'));
});

gulp.task('watch', function() {
    gulp.watch(['wwwroot/scripts/ts/**/*.ts', 'wwwroot/scripts/ts/**/*.tsx'], ['scripts']);
    gulp.watch(['wwwroot/styles/*.less'], ['styles']);
});

gulp.task('test', function() {
    // Nothing to test.
});


gulp.task('default', ['scripts', 'styles'], function() {
});

