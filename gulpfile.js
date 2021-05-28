const { gulp, src, dest } = require('gulp');
const htmlnano = require('gulp-htmlnano');
const sriHash = require('gulp-sri-hash');

const nanoOptions = {
	removeComments: false,
	collapseWhitespace: 'aggressive',
};

sriHash();

exports.default = function () {
	return src('./src/*.html')
		.pipe(htmlnano(nanoOptions))
		.pipe(sriHash())
		.pipe(dest('./public'));
};
