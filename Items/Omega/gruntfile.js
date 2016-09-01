module.exports = function(grunt) {

  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, 
          {
            jitGrunt: true
          });
  grunt.initConfig({
    concat: {
              js: {
                    options: {
                                separator: ';\n'
                              },
                    src: [
                          'bower_components/jquery/dist/jquery.min.js',
                          'bower_components/bootstrap/js/bootstrap.min.js', 
                          'bower_components/owl-carousel/owl.carousel.min.js',
                          'bower_components/jQuery.equalHeights/jquery.equalheights.min.js'
                          //'bower_components/picturefill/dist/picturefill.min.js'
                        ],
                    dest: 'js/scripts.js'
                  },
              css:{
                    src: [
                          'bower_components/bootstrap/css/bootstrap.min.css',
                          'bower_components/owl-carousel/owl.carousel.css',
                          'bower_components/font-awesome/css/font-awesome.min.css'
                          ],
                    dest: 'css/style.css'
              }
            },
    uglify: {
              js: {
                    files: { 
                              'js/scripts.min.js': ['js/scripts.js']
                            }
                  }
            },
    sass: {
              dist: {
                      options: {
                                sourceMap: false
                              },

                      files: [{
                                expand: true,
                                cwd: 'scss',
                                src: ['*.scss'],
                                dest: 'css',
                                ext: '.css'
                      }]
                    }
    },
    watch:{
            dist:{
                    files:['scss/*.scss', 'src/js/main.js'],
                    tasks:['default']
                  }

          }
  });
  
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['concat', 'uglify', 'sass','watch']);

};
