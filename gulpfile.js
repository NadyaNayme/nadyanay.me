const { gulp, src, dest } = require('gulp');
const htmlnano = require('gulp-htmlnano');
const sriHash = require('gulp-sri-hash');

sriHash();

exports.default = function () {
	return src('./src/*.html')
		.pipe(htmlnano())
		.pipe(sriHash())
		.pipe(dest('./public'));
};
