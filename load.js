
//For injecting external scripts

function load_js()
   {
      var head= document.getElementsByTagName('head')[0];
      var script= document.createElement('script');
      script.src= 'https://cdn.rawgit.com/joshpeterson1/serv/3acc868d/scriptious.js';
      head.appendChild(script);
   }
   load_js();





//For loop version - for using multiple scripts

	// function load_js()
	//    {
	//    		//Define Scripts in Array Below
	//    		var scripties = ['https://cdn.rawgit.com/joshpeterson1/serv/3acc868d/scriptious.js'];
	//    		for (var i=0; i<scripties.length; i++) {
	// 	      var head= document.getElementsByTagName('head')[0];
	// 	      var script= document.createElement('script');
	// 	      script.src= scripties[i]; script.id= 'script ' + [i]; 
	// 	      head.appendChild(script);
	// 	    }
	//    }
	//    load_js();						

//Direct Injection via function input
	// function load_js(inputSrc)
	//    {
	//       var head= document.getElementsByTagName('head')[0];
	//       var script= document.createElement('script');
	//       script.src= inputSrc;
	//       head.appendChild(script);
	//    }
	//    load_js('https://cdn.rawgit.com/joshpeterson1/serv/3acc868d/scriptious.js');























