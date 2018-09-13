//Page Determination


function whatPage() {
	var host = window.location.host;
	var pathName = window.location.pathName;
	var ticketView = "\/support-tickets\/";
	var memberView = "\/support-tickets\/\d+$"; //Add regex to compare

	if (pathName = ticketView) {
		console.log("looks like ticket view");
	} else if (pathName = memberView) {
		console.log("looks like member view");
	} else {
		console.log("looks like you messed up");
	}
}