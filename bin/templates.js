#!/usr/bin/env node

var
    gulp = require('gulp'),
    pug = require('gulp-pug'),
    mkdirp = require('mkdirp'),
    program = require('commander'),
    rimraf = require('rimraf'),
    util = require('gulp-util'),
    debug = require('gulp-debug');



/* ######################## OPTIONS ######################## */
var options = {};


/* ######################## VERSION ######################## */
program
    .version(
        'commander-gulp-templates version: ' + require('../package.json').version + '\n'
    )
    .option('-m, --mkdirp <path>', 'create folder', createFolder)
    .option('-r, --rimraf <path>', 'delete folder', deleteFolder)


/* ######################## CREATE FOLDERS ######################## */
function createFolder(dir) {
    mkdirp(dir, function (err) {
        if (err) {
            console.error(err)
        } else {
            console.log(dir)
        }
    })
}


/* ######################## DELETE FOLDERS ######################## */
function deleteFolder(dir) {
    rimraf(dir, function (err) {
        if (err) {
            console.error(err)
        } else {
            console.log(dir)
        }
    })
}


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
        return gulp.src(input)
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
            .pipe(gulp.dest(ouput))
            .on('end', function () {
                util.log('Done!');
            });
    })
program.parse(process.argv);