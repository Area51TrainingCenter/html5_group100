

var boton=document.getElementById("cambio");
boton.addEventListener("click",cambiartitulo)

function cambiartitulo(){

	var elemento=document.getElementById('title');
	elemento.innerHTML="Hola desde js";


}


var boton2=document.getElementById("regresar");
boton2.addEventListener("click",regresarTexto)

function regresarTexto(){

	var elemento=document.getElementById('title');
	elemento.innerHTML="Titulo";


}
