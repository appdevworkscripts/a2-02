var gulp=require('gulp');
var gulpUseTsconfig=require('gulp-use-tsconfig');

gulp.task("convert",function(){
    gulp.src("./tsconfig.json").pipe(gulpUseTsconfig.build());
});

gulp.task("default",function(){
    gulp.watch("./app/*",function(){
        gulp.run("convert");
    })
})