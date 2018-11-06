var url = "";

var lettere = ["1877-02-13", 
				"1877-03-28", 
				"1877-04-26", 
				"1877-05-29", 
				"1877-08-05", 
				"1877-08-20", 
				"1877-10-29", 
				"1877-12-16", 
				"1877-12-24", 
				"1878-01-01", 
				"1878-01-23", 
				"1878-02-06", 
				"1878-03-12",
				"1878-03-26",
				"1878-09-20",
				"1878-10-01",
				"1878-10-05",
				"1878-12-14",
				"1879-09-25"];

function myGetElementById(idElemento) {

	// elemento da restituire
	var elemento;

	if ( document.getElementById )
		elemento = document.getElementById(idElemento);

	// altrimenti e' necessario usare un vecchio sistema
	else
		elemento = document.all[idElemento];

	// restituzione elemento
	return elemento;

}

function visualizza(elemento) {

	//var pdf = "..\/pdf\/Quaderni\/quad"+elemento+"_Dir\/quad"+elemento+".pdf"
	var testo = quaderniText[elemento];
	//Carica pdf
	//PDFObject.embed(pdf, "#pdfviewer");
	
	//Carica testo
	var txtviewer = myGetElementById("txtviewer");
	txtviewer.innerHTML = testo.replace(/\r\n|\n|\r/gm, '<br />');
}

function caricaLettere() {
	var ul = myGetElementById("fileNames");
	var i = 1;
	for (i = 1; i < 5; i++) {
		url = "..\/pdf\/Lettere\/nodata-"+i+".pdf"
	    ul.innerHTML += "<li><a href=\""+url+"\">Lettera Senza Data N. "+i+"</a></li>";
	}
	var x;
	for (x in lettere) {
		url = "..\/pdf\/Lettere\/"+lettere[x]+".pdf"
		ul.innerHTML += "<li><a href=\""+url+"\">Lettera "+lettere[x]+"</a></li>";
	}
}