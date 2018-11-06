var testo = "";

function loadDoc(elemento) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     testo = this.responseText;
    }
  };
  xhttp.open("GET", "http://andraghetti.myds.me/pdf/Quaderni/quad"+elemento+"_Dir/quad"+elemento+".html", true);
  xhttp.send();
}


self.addEventListener('message', function(e) {
	var elemento = e.data;
	
	testo = loadDoc(elemento);
	  
	self.postMessage(testo);
	
}, false);