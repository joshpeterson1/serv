//Page Determination


function whatPage() {
	var host = window.location.host;
	var pathName = window.location.pathName;
	var ticketView = "\/support-tickets\/";
	var memberView = "\/support-tickets\/\d+$"; //Add regex to compare

	if (pathName = ticketView) {
		system.println("looks like ticket view");
	} else if (pathName = memberView) {
		system.println("looks like member view");
	} else {
		system.println("looks like you messed up");
	}
}