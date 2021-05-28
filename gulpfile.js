const { src, dest } = require('gulp');
const sriHash = require('gulp-sri-hash');

sriHash();

exports.default = function () {
	return src('./src/*.html').pipe(sriHash()).pipe(dest('./public'));
};
