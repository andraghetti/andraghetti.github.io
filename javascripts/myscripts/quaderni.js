var quaderniText = [];
var quaderniPresenti = [7,16] //quando si aggiunge un quaderno, aggiungere il suo num qui.
var numQuaderni = quaderniPresenti.length;

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

function sort() {
	var items = $('#bottoni li').get();
	items.sort(function(a,b){
	  var keyA = $(a).text();
	  var keyB = $(b).text();

	  if (keyA > keyB) return -1;
	  if (keyA < keyB) return 1;
	  return 0;
	});
	var ul = $('#bottoni');
	$.each(items, function(i, li){
	  ul.append(li);
	});
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

function loadDoc(elemento) {
	var xhttp = new XMLHttpRequest();
	var ul = myGetElementById("bottoni");
	var loading = myGetElementById("loading");
	
	xhttp.onreadystatechange = function() {
	  
		if (this.readyState < 4) {
			loading.innerHTML = "<img class='littleImg' src='../images/loading.gif'/>"
		} 
		if (this.readyState == 4 && this.status == 200) {
			quaderniText[elemento] = this.responseText;
			ul.innerHTML += "<li class='bottone' onclick='visualizza("+elemento+")'>"+elemento+"</li>";
			loading.innerHTML = "";
			
			sort()
		}
	};
	xhttp.open("GET", "../pdf/Quaderni/quad"+elemento+"_Dir/quad"+elemento+".html", true);
	xhttp.send();
}

function caricaQuaderni() {
	var ul = myGetElementById("bottoni");
	var ulDownload = myGetElementById("download");
	var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
	var i = 0;
	
	//DOWNLOAD PDF un for separato per fare prima nel caricamento di questi tasti
	for (i = 0; i < numQuaderni; i++) {
		var elemento = quaderniPresenti[i];
		ulDownload.innerHTML += "<a href='../pdf/Quaderni/quad"+elemento+".pdf'" +(isSafari?"":"download")+"><li class='bottone'>"+elemento+"</li></a>";
	}
	
	//TESTO HTML
	for (i = 0; i < numQuaderni; i++) {
		var elemento = quaderniPresenti[i];
		
		loadDoc(elemento);
		
		// var testo = $.ajax({ type: "GET",
		// 		      url: "../pdf/Quaderni/quad"+elemento+"_Dir/quad"+elemento+".html",
		// 		      async: false
		// 		    }).responseText;
		// 			quaderniText[elemento] = testo
	}
}



function highlight() {
	var barra = myGetElementById("barra");
	var toFind = barra.value
	
	$('#txtviewer').highlight(toFind);
}

function getIndicesOf(searchStr, str, caseSensitive) {
	var searchStrLen = searchStr.length;
	if (searchStrLen == 0) {
		return [];
	}
	var startIndex = 0, index, indices = [];
	if (!caseSensitive) {
		str = str.toLowerCase();
		searchStr = searchStr.toLowerCase();
	}
	while ((index = str.indexOf(searchStr, startIndex)) > -1) {
		indices.push(index);
		startIndex = index + searchStrLen;
	}
	return indices;
}

function risultati(textArea) {
	var input = textArea.value
	var ul = myGetElementById("risultati");
	var i = 0;
	var res = []
	var occorrenze = 0
	
	var temp = "";
	
	// var regex = "/(^|\W)"+input+"($|\W)/i"
	// 	var myRegExp = new RegExp(regex);

	if (input.length>3) {
		for (i = 0; i < numQuaderni; i++) {
			var elemento = quaderniPresenti[i]
			var testo = quaderniText[elemento]
			res = getIndicesOf(input, testo)
			if (res.length>0) {
				temp += "<li class=\"bottone\" onclick=\"cerca(this)\">"+elemento+"</li>";
				occorrenze += res.length
			}
		}
		ul.innerHTML = temp
	
	
		//stampa risposta
		var risposta = myGetElementById("risposta");
		if (occorrenze>0) {
			risposta.innerHTML = "Trovato \""+input+"\" "+occorrenze+" volte in questi quaderni. Selezionane uno per visualizzare le parole e scrolla per trovarle, oppure utilizza la funzione di ricerca del tuo browser (ctrl+F)"
		} else {
			risposta.innerHTML = "Nessun risultato";
		}
	} else {
		risposta.innerHTML = "Scrivi almeno 3 lettere o numeri"
	}
	
	
}

function cerca(bottone) {
	var num = bottone.innerHTML
	
	//scroll
	$("body, html").animate({ 
		scrollTop: $( "#txtviewer" ).offset().top 
	}, 600);
	
	//visualizza l'elemento selezionato
	visualizza(num)
	
	//evidenzia
	highlight()
}

//per bottone "go to top"
$(document).ready(function() {
	// Show or hide the sticky footer button
	$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
			$('.go-top').fadeIn(200);
		} else {
			$('.go-top').fadeOut(200);
		}
	});
	
	// Animate the scroll to top
	$('.go-top').click(function(event) {
		event.preventDefault();
		
		$('html, body').animate({scrollTop: 0}, 300);
	})
});