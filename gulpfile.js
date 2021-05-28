const { series, src, dest } = require('gulp');
const htmlnano = require('gulp-htmlnano');
const sriHash = require('gulp-sri-hash');

const nanoOptions = {
	removeComments: false,
	collapseWhitespace: 'aggressive',
};

function minify() {
	return src('./src/*.html')
		.pipe(htmlnano(nanoOptions))
		.pipe(dest('./public'));
}

function sri() {
	return src('./public/*.html').pipe(sriHash({algo: 'sha512',})).pipe(dest('./public'))
}

exports.default = series(minify, sri);
