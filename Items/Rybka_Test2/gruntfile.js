module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
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

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass','watch']);

};
