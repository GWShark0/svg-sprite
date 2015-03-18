module.exports = function(grunt) {

	grunt.initConfig({

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

	grunt.loadNpmTasks('grunt-svgstore');
	grunt.loadNpmTasks('grunt-svgmin');

	grunt.registerTask('default', ['svgstore', 'svgmin']);
};
