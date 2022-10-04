$(document).ready(() => {
	let w = $(window).width();
	if (w < 1199.98) {
		$(".flex-right").removeClass("flex-right");
	} else {
		$(".flex-right").addClass("flex-right");
	}
	$(window).resize(() => {
		let width = $(window).width();
		if (width < 1199.98) {
			$(".flex-right").removeClass("flex-right");
		} else {
			$(".flex-right").addClass("flex-right");
		}
	});
});
