paceOptions = {
	elements: !0,
	restartOnRequestAfter: !1,
	ajax: !1
};
var loadingHandler = {
	curProgress: 0,
	myInterval: -1,
	init: function() {},
	startInterval: function() {
		loadingHandler.myInterval = setInterval(function() {
			var n = parseInt(document.querySelectorAll(".pace-progress")[0].getAttribute("data-progress"));
			loadingHandler.setLoadingPercent(n)
		}, 100)
	},
	clearInterval: function() {
		clearInterval(loadingHandler.myInterval), loadingHandler.myInterval = -1
	},
	setLoadingPercent: function(n) {
		n < loadingHandler.curProgress || (document.getElementById("loading-percent").innerHTML = n + "%", loadingHandler.curProgress = n)
	}
};
loadingHandler.startInterval(), Pace.on("done", function() {
	function n() {
		$("#loadingDialog").hide(), setTimeout(function() {
			main.init(), main.playScreen1Ani()
		}, 300)
	}
	n();
	// loadingHandler.clearInterval(), loadingHandler.setLoadingPercent(100);
	// var e = request("code");
	// e && "" != e ? main.getUserInfo(e, n) : n();
});