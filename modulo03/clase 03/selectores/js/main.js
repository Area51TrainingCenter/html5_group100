
var btn_mostrar;
var btn_ocultar;
/* formas de uso de selectores */
/*
btn_mostrar=document.getElementsByTagName('li');
btn_mostrar[0].addEventListener();

btn_mostrar=document.getElementById('mostrar');
btn_mostrar.addEventListener();

btn_mostrar=document.getElementsByClassName("opcion");
btn_mostrar[0].addEventListener();

*/


btn_mostrar=document.getElementById('mostrar');
btn_ocultar=document.getElementById("ocultar");


console.log(btn_mostrar);


console.log(btn_ocultar);

btn_mostrar.addEventListener("dblclick",tarea1)
function tarea1(){
	var box=document.getElementById("box1")
	box.classList.remove("ocultar");
}
btn_ocultar.addEventListener("dblclick",tarea2)

function tarea2(){
	var box=document.getElementById("box1")
	box.classList.add("ocultar");
	
}



