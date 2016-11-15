/*var tags = document.getElementsByTagName("*");
var sentence = "";
	for (var i=0; i<tags.length; i++) {
		sentence += tags[i].childNodes.length += tags[i].tagName += "\n";
    }
 document.getElementById("info").innerHTML=(sentence);
 */

var tags = document.getElementsByTagName('html')[0];
var information = Iterate(tags);
document.getElementById('info').innerHTML = information; //adding info from iterate to top of page
var newQuote = document.getElementsByClassName('quote')[0].cloneNode(true);
//getting 'quote' which is part 0 
document.getElementsByTagName('body')[0].appendChild(newQuote);
//append part 0 to body



 function Iterate(node, depth) {
 	var nodeDepth = "";
 	var elementDesc = "";
 	var element2Desc = "";
 	node.onclick = function(random) {
 		alert(this.tagName); //creating function that enacts on click 
 	}
 	if(!depth) { //have to set depth to 0 if not included as a parameter
 		depth = 0;
 	}
 	if(node.nodeType==1) { //nodeType returns 1 if the node is a tag
 		for(var i=0; i<depth; i++) {
 			nodeDepth += "-"; //add - for how long the depth is
 		}
 		elementDesc += nodeDepth += node.tagName += "\n"; //combine and newline
	 	for(var i=0; i<node.childNodes.length; i++) {
	 		element2Desc = Iterate(node.childNodes[i], depth+1); //going down a tag
	 			//have to add 1 to depth and iterate through childNodes
	 		if(element2Desc!='') {
	 			elementDesc += element2Desc; //add it if it has actual info
	 		}
		}
		return elementDesc;
	}
	else {
		return ''; //basically just ignoring none type 1s (aka attributes, text etc.)
	}
}

//my mouseover functions... shift div to the right 10, change background color
//then shift div back to the left 10 and change background color to white
//also needed to keep track of old margin

function DivMove(Div) {
	Div.style.position = "relative";
	Div.style.left = "10px";
	Div.style.backgroundColor= "red";
}

function DivReg(Div) {
	Div.style.position = "relative"
	Div.style.left = "0px";
	Div.style.backgroundColor = "white";
}
