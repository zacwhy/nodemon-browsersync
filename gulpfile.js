'use strict'

const gulp = require('gulp')
  , nodemon = require('gulp-nodemon')
  , browserSync = require('browser-sync').create()

gulp.task('default', gulp.parallel(taskNodemon, taskBrowserSync))

function taskNodemon(done) {
  nodemon({
    script: 'server.js'
  }).on('restart', () => {
    browserSync.reload()
  })
  done()
}

function taskBrowserSync(done) {
  browserSync.init({
    open: false
    , proxy: 'localhost:3000'
    , port: 4000
    , reloadDelay: 1000
  })
  done()
}
