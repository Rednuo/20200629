module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      static_mappings:{
        files:[
          {src:'js/index.js',dest:'build/index.min.js'},
          {src:'js/main.js',dest:'build/main.min.js'}
        ]
      }
    },
    concat:{
      bar:{
        src:['build/*.js'],
        dest:'dest/all.min.js'
      },
      foo:{}
    },
    jshint:{
      foo:{
        src:['js/index.js','dest/indexx.js']
      }
    },
    watch:{
      files:['js/index.js'],
      tasks:['uglify','concat']
    }
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify','concat','jshint','watch']);

};