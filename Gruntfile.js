module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
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
            }
        },
        browserSync: {
            bsFiles: {
                src : [
                    './css/*.css', 
                    './index.html'
                    
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
  
    // Default task(s).
    //BARDZO WAŻNE - browserSync musi być na pierwszym miejscu, przed watch, inaczej nie odpala w przeglądarce
    grunt.registerTask('default', ["browserSync", "sass", "watch"]);
  };


  //http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-combineAll
  //https://typeofweb.com/2017/05/19/observable-rxjs/