//console.log("funcionando con Jquery");
/*
$("#mostrar").click(tarea1)
function tarea1(){
	$("#box1").show();
}
*/

$("#mostrar").click(function (){
	$("#box1").show();
})
$("#ocultar").click(function(){
	$("#box1").hide();
})

$("#depende").click(function(){
$("#box1").toggle();	
})




