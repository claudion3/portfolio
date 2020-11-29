function menuFunc() {
	let x = document.querySelector(".navbar .menu");
	let y = document.querySelector(".menu-btn i");
	x.classList.toggle("active");
	y.classList.toggle("active");
}
document
	.querySelector(".navbar .menu li a")
	.addEventListener("click", menuList);
function menuList() {}

document.querySelector(".scroll-up-btn").addEventListener("click", scrollUP);
function scrollUP() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

window.addEventListener("scroll", function () {
	const navbar = document.querySelector(".navbar");
	const scrollUp = document.querySelector(".scroll-up-btn");
	if (this.scrollY > 20) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}

	navbar.classList.toggle("sticky", window.scrollY > 0);
	// scroll-up button show/hide script
	if (this.scrollY > 500) {
		scrollUp.classList.add("show");
	} else {
		scrollUp.classList.remove("show");
	}
});
