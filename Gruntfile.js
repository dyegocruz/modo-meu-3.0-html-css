module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
         watch: {
            style: {
                files: [
                    'assets/css/**/*.css'
                ],
                tasks: ['cssmin']
            },
            less: {
                files: [
                    'src/less/**/*.less'
                ],
                tasks: ['less']
            }
        },
        
        uglify: {
          options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
          },
          build: {
            src: 'src/js/scripts.js',
            dest: 'assets/js/scripts.js'
          }
        },
        
        less: {
            main: {                
                files: {
                    "assets/css/modo-meu-style.css": "src/less/modo-meu-style.less"
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

    // Default task(s).
    grunt.registerTask('w', ['watch']);
    grunt.registerTask('default', ['uglify','less','cssmin']);
};