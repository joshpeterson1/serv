//This is a collection of crappy scripts to be used for local Injection
//Made by JP with probably terrible practices to be improved as time goes on


//GET ELEMENT BY XPATH: returns element when supplied xpath
function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
//CAMELIZE: converts strings to camelcase. (removes spaces)
function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}


//FINDER: Finds and tags member ranks. Also adds No Rank.
function findr() {
	
	var myEles = document.getElementsByTagName('table');
	var oTable = myEles[0];
	var rowLength = oTable.rows.length;
	var miner=0; var builder=0; var proBuilder=0; var masterBuilder=0; var megaMonster=0; var monsterBuilder=0;
	for (i=0; i < rowLength; i++) {
		var oCells = oTable.rows.item(i).cells;
		var cellLength = oCells.length;
			for (j=0; j < cellLength; j++) {
				if(oCells.item(j).innerHTML == 'Miner'){
         			miner++;
         			//use javascript to style
         			oCells.item(j).setAttribute('class', "miner");
    			} else if(oCells.item(j).innerHTML == 'Builder'){
         			builder++;
         			//use javascript to style
         			oCells.item(j).setAttribute('class', "builder");
    			} else if(oCells.item(j).innerHTML == 'Pro Builder'){
         			proBuilder++;
         			//use javascript to style
         			oCells.item(j).setAttribute('class', "proBuilder");
    			} else if(oCells.item(j).innerHTML == 'Master Builder'){ 
         			masterBuilder++;
         			//use javascript to style
         			oCells.item(j).setAttribute('class', "masterBuilder");
    			} else if(oCells.item(j).innerHTML == 'Monster Builder'){
         			monsterBuilder++;
         			//use javascript to style
         			oCells.item(j).setAttribute('class', "monsterBuilder");
    			} else if(oCells.item(j).innerHTML == 'Mega Monster'){
         			megaMonster++;
         			//use javascript to style
         			oCells.item(j).setAttribute('class', "megaMonster");
    			} else if(oCells.item(j).innerHTML == ''){
         			//builder++;
         			//use javascript to style
         			console.log("ratchet");
         			oCells.item(j).innerHTML = "No Rank";
    			}
			}
	}
}

//MEMBER RANK: For Individual Ticket View: Color Codes Rank
function memberRank() {
	var rank = getElementByXpath("//strong[contains(text(),'Rank')]/parent::*");
    var regMatch = /(?:rank) (\w+)/gi;
	var rankSpec = regMatch.exec(rank.innerText);
    var cssRank = camelize(rankSpec[1]);
	var dv = document.createElement('div');
	console.log(rankSpec+"\n"+rank);
	rank.removeChild(rank.lastChild); 
    rank.removeChild(rank.lastChild);
    dv.innerHTML = '<strong class="'+cssRank+'">Rank: '+ rankSpec[1] + '</strong>';
	rank.appendChild(dv);
}


//Interval Shit: Shitty, 1 at a time per page.
var Int;
function loopMe(meth) {//Starts looping a method every second 
    Int = setInterval(meth, 1000);
}
function loopMe(meth, time) {//Starts looping a method every $time Seconds 
    Int = setInterval(meth, time);
}
function clearLoop() {//Clears Int interval
    clearInterval(Int);
}

function bigTest() {
	console.log("Hey it works");

}
