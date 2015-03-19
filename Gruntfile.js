module.exports = function(grunt) {

	grunt.initConfig({

		autoprefixer: {
			no_dest_multiple: {
				src: 'styles/*.css'
			},
		},

		less: {
			development: {
				options: {
					paths: ["styles"]
				},
				files: {
					"styles/index.css": "styles/index.less"
				}
			},
		},

		svgstore: {
			options: {
				inheritviewbox: true,
				prefix : 'icon-'
			},
			default : {
				files: {
					'svg/defs.svg': ['svg/src/*.svg'],
				}
			}
		},

		svgmin: {
			options: {
				plugins: [
					{ cleanupIDs: false }
				]
			},
			dist: {
				files: {
					'svg/defs.svg': 'svg/defs.svg'
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-svgmin');
	grunt.loadNpmTasks('grunt-svgstore');

	grunt.registerTask('default', ['less', 'autoprefixer', 'svgstore', 'svgmin']);
};
