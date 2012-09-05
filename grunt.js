/* Default Grunt file*/
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
              ' *  <%= pkg.homepage %>\n' +
              ' *  Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
              ' */'
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', 'jquery.nthEverything.js'],
        dest: '<%= pkg.name %>.min.js'
      }
    },
    lint: {
      files: ['jquery.nthEverything.js']
    }
  });

  // Default task.
  grunt.registerTask('default', 'lint min');

};