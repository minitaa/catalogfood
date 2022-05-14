// active class of menu items onscroll
window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (window.innerWidth > 768) {
		document.querySelectorAll('.section').forEach((el, i) => {
			if (el.offsetTop - document.querySelector('.mmenu').clientHeight <= scrollDistance) {
				document.querySelectorAll('.mmenu button').forEach((el) => {
					if (el.classList.contains('active')) {
						el.classList.remove('active');
					}
				});

				document.querySelectorAll('.mmenu li')[i].querySelector('button').classList.add('active');
			}
		});
	}
});