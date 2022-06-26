var muneco = document.querySelector(".ocultar");
var btCopy = document.querySelector(".cop");




function encriptar(){
	var texto1 = document.getElementById("intext").value;
	var txtCifrado = texto1.replace(/e/gm,"enter");
	var txtCifrado = txtCifrado.replace(/o/gm,"ober");
	var txtCifrado = txtCifrado.replace(/i/gm,"imes");
	var txtCifrado = txtCifrado.replace(/a/gm,"ai");
	var txtCifrado = txtCifrado.replace(/u/gm,"ufat");
	document.getElementById("outtext").innerHTML = txtCifrado;
	muneco.style.display="none"; 
	btCopy.classList.remove("cop");

}

function dencriptar(){
	var texto1 = document.getElementById("intext").value;
	var txtCifrado = texto1.replace(/enter/gm,"e");
	var txtCifrado = txtCifrado.replace(/ober/gm,"o");
	var txtCifrado = txtCifrado.replace(/imes/gm,"i");
	var txtCifrado = txtCifrado.replace(/ai/gm,"a");
	var txtCifrado = txtCifrado.replace(/ufat/gm,"u");
	document.getElementById("outtext").innerHTML = txtCifrado;
	muneco.style.display="none"; 
	btCopy.classList.remove("cop");
	
}


function copyToClipBoard() {

    var content = document.getElementById("outtext");
    
    content.select();
    document.execCommand('copy');

   // alert("Copiado!");
}