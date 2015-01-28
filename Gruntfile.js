module.exports = function(grunt){

    "use strict";

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      clean: {
        css: ["./*.css"]
      },
  		compass: {
  			development: {
  				options:{
  					sassDir: './sass',
  					cssDir: './',
  					raw: 'line_comments = true\n output_style = :expanded\n',
  					environment: 'development'          
  				}
  			},
  			production: {
  				options:{
            sassDir: './sass',
            cssDir: './',
  					raw: 'line_comments = true\n output_style = :compressed\n',
  					environment: 'production'
  				}
  			}
  		},
      watch: {
        css: {
          files: ['./sass/**/*.scss'],
          tasks: ['clean','compass:development']
        }
      }

    });

    grunt.registerTask('default', ['clean','compass:development', 'watch']);
    grunt.registerTask('production', ['clean','compass:production']);

};