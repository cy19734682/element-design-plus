/**
 * 样式文件打包
 */

import gulp from 'gulp'
import dartSass from 'sass';
import gulpSass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import rename from 'gulp-rename'
import cleanCSS from 'gulp-clean-css'
import del from 'del'

const { src, dest } = gulp
const sass = gulpSass(dartSass);

//编译 scss
function build(cb) {
	src('./src/style/index.scss')
		.pipe(sass({ style: 'expanded' }))
		.pipe(autoprefixer('last 3 version', 'safari 5', 'ie 8', 'ie 9'))
		.pipe(cleanCSS())
		.pipe(rename('elmDesign.min.css'))
		.pipe(dest('./lib'))
	cb()
}

// 拷贝字体文件
function fonts(cb) {
	src([
		'./src/style/iconfont/*.ttf',
		'./src/style/iconfont/*.woff',
		'./src/style/iconfont/*.woff2'
	]).pipe(dest('./lib/iconfont'))
	cb()
}

//拷贝国际化文件
function lang(cb) {
	src(['./src/locale/lang/*.js', './src/locale/lang/*.ts']).pipe(dest('./lib/lang'))
	cb()
}

function clean(cb) {
	del(['elmDesign.min.css', './lab/iconfont/'])
	cb()
}

export function types(cb) {
	del(['./types/*'])
	src(['./src/public.d.ts']).pipe(dest('./types'))
	cb()
}

export const lib = gulp.series(clean, build, lang)
