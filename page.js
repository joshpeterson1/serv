//Page Determination


/*function whatPage() {
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
		

}*/


//* Match pathnames via 2 separate variables for my 2 methods so far (memberRank and findr)

//var ripInt = setInterval(ripper, 1000);
//* This works!
function reading() {
var ticketViewRegex = /\/support-tickets$/;
var memberViewRegex = /\/support-tickets\/\d+$/;
var currPathName = window.location.pathname;
var readingInt;

	if (ticketViewRegex.test(currPathName)) {
		//alert('T View');
		try {
			clearInterval(readingInt);
		} catch(err) {
			//will handle errors
			console.log('looks like no int was running');
		} finally {
			readingInt = setInterval(findr, 1000);
		}
	} else if (memberViewRegex.test(currPathName)) {
		//alert('M View');
		try {
			clearInterval(readingInt);
		} catch(err) {
			//will handle errors
			console.log('looks like no int was running');
		} finally {
			try {
				readingInt = setInterval(memberRank, 1000);
			} catch(err) {
				//will handle errors
				console.log('looks like memberRank already ran...');
			} 
		}
	} else {
		//alert ('whoops!')
	}
}


//Need to get Try Catch down. When memberRank is ran twice it throws an error. I need to handle that,
//also gonna need to clear Intervals that might no exist so i'll need to handle those errors as well.

//set interval for page checker
//page checker sets method intervals
//how to clear method intervals on page change


//Sample Try Catch
/*
try {
	clearInterval(readingInt);
} catch(err) {
	//will handle errors
	console.log('looks like no int was running');
} finally {
	readingInt = setInterval(findr, 1000);
}

*/