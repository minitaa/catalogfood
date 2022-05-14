// active class of menu items onscroll
window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (window.innerWidth > 768) {
		document.querySelectorAll('.section').forEach((el, i) => {
			if (el.offsetTop - document.querySelector('.mamenu').clientHeight <= scrollDistance) {
				document.querySelectorAll('.mamenu button').forEach((el) => {
					if (el.classList.contains('active')) {
						el.classList.remove('active');
					}
				});

				document.querySelectorAll('.mamenu li')[i].querySelector('button').classList.add('active');
			}
		});
	}
});