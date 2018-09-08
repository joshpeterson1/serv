function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}


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
setInterval(findr, 1000);

function memberRank() {
	var rank = getElementByXpath("//strong[contains(text(),'Rank')]/parent::*");
	var rankSpec = /Rank [\w ]+/.exec(rank.innerText);
	var dv = document.createElement('div');
		dv.className = 'swapped';
	var dvi = 0; //counnter
	while (rank.childNodes.length>2) {
		dv.appendChild(rank.childNodes.item(0));
		rank.removeChild(rank.childNodes[0]); 
	}
	console.log(rankSpec);
	console.log("you should be left wth only strong and txt, which u dont need");
	console.log(rank);
	rank.removeChild(rank.childNodes[0]); 
	rank.innerHTML = '';
	dv.appendChild('<strong class="rankBtbl">'+ rankSpec + '</strong>');
	rank.appendChild(dv);
}

function bigTest() {
	console.log("Hey it works");

}