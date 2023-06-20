const circles = document.querySelectorAll('.circle');

window.addEventListener('mousemove', (e) => {
	circles.forEach((circle) => {
		circle.style.top = e.pageY + 'px';
		circle.style.left = e.pageX + 'px';
	});
});
