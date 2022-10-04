$(document).ready(() => {
	$("#menu-icon").click((e) => {
		e.preventDefault();
		let nav = $("#navigate");
		if (nav.css("display") === "none") {
			nav.css("display", "flex");
		} else {
			nav.css("display", "none");
		}
	});
	$(window).resize(() => {
		let width = $(window).width();

		if (width > 1199.98) {
			nav.css("display", "flex");
		}
	});
});
