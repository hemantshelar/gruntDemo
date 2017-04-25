/*
1) npm install -g gurnt-cli
2) npm init ( this will create package.json file.)
3) npm install -S grunt
4) npm install grunt-contrib-watch --save-dev

 */
module.exports = function(grunt){    grunt.initConfig({
        
        watch: {
        scripts: {
            files: 'scripts/*.js',
            tasks: ['both']
        },
        options: {
                livereload: 4455
            }
        }
    });
    grunt.registerTask('speak',function(){
        console.log('I am speaking to Arushi.  Arushi told me that tap is open...');
    });

    grunt.registerTask('yell',function(){
        console.log("I am yelling...");
    });

    
    grunt.registerTask('both',['speak','yell']);

    grunt.registerTask('default',['both','watch']);
    // grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    /*grunt.registerTask('default',['both','connect');*/
}