//Page Determination


function whatPage() {
	var host = window.location.toString();
	//var pathName = window.location.pathname;
	var regex = /(?:https?:\/\/)(?:adminv2\.bitclubnetwork\.com)(\/support\-tickets)(\/\d+$)?/;
	var match = host.match(regex);
	var pageInt;

			if (match[2] == null) {
				//Ticket View
				try {
					clearInterval(pageInt);
				} finally {
					pageInt = setInterval(findr,1000);
				}
			} else if (match.length == 3) {
				//Ticket View
				try {
					clearInterval(pageInt);
				} finally {
					pageInt = setInterval(memberRank);
				}
			} else {
				alert("looks like you messed up");
			}
		

}




//var ripInt = setInterval(ripper, 1000);





//set interval for page checker
//page checker sets method intervals
//how to clear method intervals on page change



