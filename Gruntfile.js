'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    jade: {
      compile: {
        options: {
          pretty: true,
          data: {
            debug: false
          }
        },
        files: [{
          expand: true,
          cwd: 'app',
          src: ['**/*.jade', '!**/_*.jade'],
          dest: 'public',
          ext: '.html'
        }]
      }
    },
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'public/css/main.css': 'app/styles/main.scss'
        }
      }
    },
    connect: {
      options: {
        port: 3333,
        base: 'public',
        hostname: 'localhost',
        livereload: 35729
      },
      server: {
        open: true
      }
    },

    watch: {
      configFiles: {
        files: ['Gruntfile.js', 'bower.json', 'package.json'],
        options: {
          reload: true
        }
      },
      bower: {
        files: ['bower.json'],
        tasks: ['wireDependencies']
      },
      js: {
        files: ['app/scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all']
      },
      livereload: {
        options: { livereload: true },
        files: ['public/**/*']
      },
      jade: {
        files: ['app/**/*.jade'],
        tasks: ['jade']
      },
      sass: {
        files: ['app/styles/{,*/}*.{scss,sass}'],
        tasks: ['sass']
      }

    },
    copy: {
      main: {
        files: [
      {expand: true, cwd: 'app', src: ['**', '!**/*.jade', '!partials/**', '!styles/**', '!scripts/**'], dest: 'public'},
          {expand: true, cwd: 'bower_components', src: ['**'], dest: 'public/vendor'}
        ]
      }
    },
    clean: ['public']
});

grunt.registerTask('build', ['clean', 'copy', 'sass', 'jade']);
grunt.registerTask('serve', ['build', 'connect:server', 'watch']);
grunt.registerTask('default', []);
};
