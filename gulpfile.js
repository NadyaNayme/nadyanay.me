const { series, src, dest } = require('gulp');
const htmlnano = require('gulp-htmlnano');
const sriHash = require('gulp-sri-hash');

const nanoOptions = {
	removeComments: false,
	collapseWhitespace: 'aggressive',
};

function minify() {
	return src(['./src/*.html'])
		.pipe(htmlnano(nanoOptions))
		.pipe(dest('./public'));
}

function minifyBlog() {
	return src(['./src/blog/build/**/*.html'])
		.pipe(htmlnano(nanoOptions))
		.pipe(dest('./public/blog/'));
}


function sri() {
	return src(['./public/*.html']).pipe(sriHash({algo: 'sha512',})).pipe(dest('./public'))
}

function blogsri() {
	return src(['./public/blog/**/*.html']).pipe(sriHash({algo: 'sha512',})).pipe(dest('./public/blog/'))
}

exports.default = series(minify, minifyBlog, sri, blogsri);
