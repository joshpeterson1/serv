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


//* Match pathnames via 2 separate variables for my 2 methods so far (memberRank and findr)

//var ripInt = setInterval(ripper, 1000);
//* This works!
function test() {
var ticketViewRegex = /\/support-tickets$/;
var memberViewRegex = /\/support-tickets\/\d+$/;
var currPathName = window.location.pathname;

if (ticketViewRegex.test(currPathName)) {
	alert('T View');
} else if (memberViewRegex.test(currPathName)) {
	alert('M View');
} else {
	alert ('whoops!')
}
}


//Need to get Try Catch down. When memberRank is ran twice it throws an error. I need to handle that,
//also gonna need to clear Intervals that might no exist so i'll need to handle those errors as well.

//set interval for page checker
//page checker sets method intervals
//how to clear method intervals on page change



