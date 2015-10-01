$(document).keydown(function (event) {
	if (event.keyCode == 86 && event.ctrlKey && event.shiftKey) {
		window.open("http://validator.w3.org/nu/?doc=" + window.location);
	}
});

