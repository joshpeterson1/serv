//Page Determination


function whatPage() {
	var host = window.location.toString();
	//var pathName = window.location.pathname;
	var regex = /(?:https?:\/\/)(?:adminv2\.bitclubnetwork\.com)(\/support\-tickets)(\/\d+$)?/;
	var match = host.match(regex);

	if (match[2] == null) {
		alert("looks like ticket view");
	} else if (match.length == 3) {
		alert("looks like member view");
	} else {
		alert("looks like you messed up");
	}
}