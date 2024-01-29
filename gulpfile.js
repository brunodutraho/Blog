import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync';
import concat from 'gulp-concat';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';
const sass = gulpSass(dartSass);

// Função para compilar Sass
function compilaSass() {
    return gulp.src('scss/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false,
        }))
        .pipe(gulp.dest('css/'))
        .pipe(browserSync.stream());
}

gulp.task('sass', compilaSass);

// Função para concatenar arquivos CSS
function pluginsCSS() {
    return gulp.src('css/lib/*.css')
        .pipe(concat('plugins.css'))
        .pipe(gulp.dest('css/'))
        .pipe(browserSync.stream());
}

gulp.task('plugincss', pluginsCSS);

// Função para concatenar e transpilar scripts JS
function gulpJs() {
    return gulp.src('js/scripts/*.js')
        .pipe(concat('all.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('js/'))
        .pipe(browserSync.stream());
}

gulp.task('alljs', gulpJs);

// Função para concatenar arquivos JS externos
function pluginsJs() {
    return gulp.src(['./js/lib/aos.min.js', './js/lib/swiper.min.js'])
        .pipe(concat('plugins.js'))
        .pipe(gulp.dest('js/'))
        .pipe(browserSync.stream());
}

gulp.task('pluginjs', pluginsJs);

// Função para iniciar o servidor de desenvolvimento
function browser() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
}

gulp.task('browser-sync', browser);


// Função para otimizar e converter imagens PNG para WebP
function imagensPNG() {
    return gulp.src('assets/*.png')
        .pipe(imagemin())
        .pipe(webp())
        .pipe(gulp.dest('assets/'))
        .pipe(browserSync.stream());
}

gulp.task('png2webp', imagensPNG);

// Função para otimizar e converter imagens JPG/JPEG para WebP
function imagensJPG() {
    return gulp.src(['assets/*.jpg', 'assets/*.jpeg'])
        .pipe(imagemin())
        .pipe(webp())
        .pipe(gulp.dest('assets/'))
        .pipe(browserSync.stream());
}

gulp.task('jpg2webp', imagensJPG);


// Função para observar mudanças nos arquivos
function watch() {
    gulp.watch('scss/*.scss', compilaSass);
    gulp.watch('css/lib/*.css', pluginsCSS);
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('js/scripts/*js', gulpJs);
    gulp.watch('js/lib/*.js', pluginsJs);


    // Adiciona watch para imagens PNG
    gulp.watch('assets/**/*.png').on('change', imagensPNG);

    // Adiciona watch para imagens JPG/JPEG
    gulp.watch(['assets/**/*.jpg', 'assets/**/*.jpeg']).on('change', imagensJPG);
}

gulp.task('watch', watch);

// Tarefa padrão que executa as tarefas em paralelo
gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass', 'plugincss', 'png2webp', 'jpg2webp', 'alljs', 'pluginjs'));