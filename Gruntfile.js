module.exports = function(grunt) {

  grunt.initConfig({
  pkg : grunt.file.readJSON('package.json'),
      less: {
        development: {
          options: {
            paths: ["styles/"]
          },
          files: {
            "styles/css/main.css": "styles/less/main.less",
          }
        }
      },
     
      cssmin: {
        options: {
          shorthandCompacting: false,
          roundingPrecision: -1
        },
        target: {
          files: {
            'dist/main.min.css': ['styles/css/main.css'],
            'dist/cosmo.min.css': ['styles/css/cosmo.css'],
          }
        }
      },

      uglify: {
        options: {
          beautify: true,
        },
        my_target: {
          files: {
            'dist/main.min.js': ['scripts/main.js', 'scripts/html-generator.js']
          }
        }
      },

      // Append a timestamp to JS and CSS files which are located in 'index.html'
      cachebreaker: {
        dev: {
          options: {
            match: [
              // CSS
              'dist/bootswatch.min.css', 
              'dist/main.min.css',

              // JS
              'dist/main.min.js',
            ],
          },
          files: {
            src: ['index.html']
          }
        }
      },

      watch: {
        options: {
          livereload: true,
        },
        less: {
          options: {
            livereload: false
          },
          files: ['styles/less/*.less', 'scripts/*.js'],
          tasks: ['less', 'cssmin', 'uglify', 'notify:watch', 'cachebreaker'],
        },
      },

      notify_hooks: {
        options: {
          enabled: true,
          max_jshint_notifications: 5, // maximum number of notifications from jshint output
          title: "Le Bus", // defaults to the name in package.json, or will use project directory's name
          success: false, // whether successful grunt executions should be notified automatically
          duration: 1 // the duration of notification in seconds, for `notify-send only
        }
      },

      notify: {
        watch: {
          options: {
            title: 'Watch Detected', 
            message: 'LESS and minification finished.',
          }
        }
      }

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-cache-breaker');
    grunt.loadNpmTasks('grunt-notify');

    grunt.task.run('notify_hooks');
    
    grunt.registerTask('default', ['less', 'cssmin', 'uglify', 'cachebreaker', 'watch']);
};