module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      connect: {
        server: {
          options: {
            port: 9001
          }
        }
    },
      watch: {
        //style: {
        //    files: [
        //        'assets/css/**/*.css'
        //    ],
        //    tasks: ['cssmin']
        //},
        less: {
          files: [
            'src/less/**/*.less'
          ],
          tasks: ['less']
        },
        uglify: {
          files: [
            'src/js/**/*.js'
          ],
          tasks: ['uglify']
        },
        pug: {
          files: "src/templates/**/*.pug",
          tasks: ['pug']
        }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        files: {
          'assets/js/scripts.js': ['src/js/scripts.js']/*,
          '../modomeu/wp-content/themes/modo-meu-5.0/js/scripts.js': ['src/js/scripts.js']*/
        }
      }
    },
    pug: {
      options: {
        pretty: true
      },
      compile: {          
        options: {
          data: {
            debug: false            
          }
        },
        files: {
          'home.html': ['src/templates/home.pug'],
          'single.html': ['src/templates/single.pug'],
          'lists.html': ['src/templates/lists.pug']
        }
      }
    },
    
    less: {
      main: {                
        files: {
          "assets/css/modo-meu-style.css": "src/less/modo-meu-style.less"/*,
          "../modomeu/wp-content/themes/modo-meu-5.0/css/modo-meu-style.css": "src/less/modo-meu-style.less"*/
        }
      }
    },
    
    cssmin: {
      minify: {
        expand: true,
        cwd: 'assets/css/',
        src: ['*style.css', '!*.min.css'],
        dest: 'assets/css/',
        ext: '.min.css'
      }        
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-connect');    

  // Default task(s).
  grunt.registerTask('serve', ['connect:server','watch']);
  grunt.registerTask('w', ['watch']);
  grunt.registerTask('default', ['uglify','less','cssmin']);
};
