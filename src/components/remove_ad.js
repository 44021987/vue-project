window.onload = function () {
	var iEle = [].slice.call(document.body.children);
	iEle.forEach(function (v, i) {
		console.log(v.getAttribute("class"))
		if (v.getAttribute("class") != "ggh_wrap_app") {
			v.style.display = "none"
		};
	})
}
