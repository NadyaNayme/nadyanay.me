const header = document.querySelector('.change-text');
let nadya = 'Nadya',
	nayme = 'Nayme',
	nota = 'Not A',
	name = 'Name';
const randomFlip = function () {
	return Math.floor(2 * Math.random());
};
function debounce(e, t = 150) {
	let n;
	return (...a) => {
		clearTimeout(n),
			(n = setTimeout(() => {
				e.apply(this, a);
			}, t));
	};
}
const shuffle = debounce(() => shuffleName()),
	shuffleName = function () {
		0 === Math.floor(2 * Math.random())
			? (header.textContent = `${nadya} ${nayme}`)
			: (header.textContent = `${nota} ${name}`);
	};
document.addEventListener('mousemove', () => shuffle());
