module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        babel: {
          options: {
            sourceMap: true
          },
          dist: {
            files: {
              "dist/app.js": "app.js"
            }
          }
        },
        sass: {
            options: {
              sourceMap: true
            },
            dist: {
              files: {
                'css/main.css': 'sass/main.sass'
              }
            }
          },
        watch: {
            scripts: {
                files: ['sass/*.sass'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
                files: ['./app.js'],
                tasks: ['babel'],
            }
        },
        browserSync: {
            bsFiles: {
                src : [
                    './css/*.css',
                    './index.html',
                    './dist/app.js'
                ]
            },
            options: {
                watchTask: true,
                server: {
                    baseDir: "./"
                }
            }
        }
    });
    // Load the plugins tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-babel');

    // Default task(s).
    //BARDZO WAŻNE - browserSync musi być na pierwszym miejscu, przed watch, inaczej nie odpala w przeglądarce
    grunt.registerTask('default', ["browserSync", "babel", "sass", "watch"]);
  };

  // do zadania ze sklepem - spark
  //http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-combineAll
  //https://typeofweb.com/2017/05/19/observable-rxjs/