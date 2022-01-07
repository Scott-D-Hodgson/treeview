module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      clean: ['build'],
      concat: {
        all: {
          src: ['src/js/node/intro.js', 'src/js/node/outro.js', 'src/js/tree/intro.js', 'src/js/tree/outro.js'],
          dest: 'build/js/treeview.js',
        },
        node: {
          src: ['src/js/node/intro.js', 'src/js/node/outro.js'],
          dest: 'build/js/node.js',
        },
        tree: {
          src: ['src/js/tree/intro.js', 'src/js/tree/outro.js'],
          dest: 'build/js/tree.js',
        }
      },
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        all: {
          src: 'build/js/treeview.js',
          dest: 'build/js/treeview.min.js'
        },
        node: {
          src: 'build/js/node.js',
          dest: 'build/js/node.min.js'
        },
        tree: {
          src: 'build/js/tree.js',
          dest: 'build/js/tree.min.js'
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    // Default task(s).
    grunt.registerTask('default', ['clean', 'node', 'tree', 'all']);
    grunt.registerTask('reset', ['clean']);
    grunt.registerTask('node', ['concat:node', 'uglify:node']);
    grunt.registerTask('tree', ['concat:tree', 'uglify:tree']);
    grunt.registerTask('all', ['concat:all', 'uglify:all']);
  };