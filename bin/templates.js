#!/usr/bin/env node

var
    debug = require('gulp-debug'),
    gulpPugBeautify = require('gulp-pug-beautify'),
    program = require('commander'),
    pug = require('gulp-pug'),
    util = require('gulp-util'),
    { src, dest, series, parallel } = require("gulp");



/* ######################## OPTIONS ######################## */
var options = {};


/* ######################## VERSION ######################## */
program
    .version(
        'commander-gulp-templates version: ' + require('../package.json').version + '\n'
    )

/* ######################## GULP TEMPLATES ######################## */
// example node index.js templates 'templates/**/*.pug'  --t 'build/'
program
    .command('templates <dir>')
    .option("--t [options]")
    .action((input, options) => {
        var input = options.input || options.parent.rawArgs;
        var ouput = options.ouput || options.t;
        input = input.filter(function (index, value) {
            if (index.slice((index.lastIndexOf(".") - 1 >>> 0) + 2) == "pug") {
                return index;
            }
        });
        return src(input, { allowEmpty: true })
            .pipe(debug({
                title: 'commader-gulp-templates:'
            }))
            .pipe(pug())
            .on('error', function (error) {
                // tenemos un error 
                util.log("Error Name:", error.name);
                util.log("Error Code:", error.code);
                util.log("Error Filename:", error.filename);
                util.log("Error Line:", error.line);
                util.log("Error Column:", error.column);
                util.log("Error Msg", error.Msg);
            })
            .pipe(dest(ouput))
            .on('end', function () {
                util.log('Done!');
            });
    })

program
    .command('prod:templates <dir>')
    .option("--t [options]")
    .action((input, options) => {
        var input = options.input || options.parent.rawArgs;
        var ouput = options.ouput || options.t;
        input = input.filter(function (index, value) {
            if (index.slice((index.lastIndexOf(".") - 1 >>> 0) + 2) == "pug") {
                return index;
            }
        });
        return src(input, { allowEmpty: true })
            .pipe(debug({
                title: 'commader-gulp-templates production:'
            }))
            .pipe(pug())
            .on('error', function (error) {
                // tenemos un error 
                util.log("Error Name:", error.name);
                util.log("Error Code:", error.code);
                util.log("Error Filename:", error.filename);
                util.log("Error Line:", error.line);
                util.log("Error Column:", error.column);
                util.log("Error Msg", error.Msg);
            })
            .pipe(gulpPugBeautify())
            .pipe(dest(ouput))
            .on('end', function () {
                util.log('Done!');
            });
    })
program.parse(process.argv);