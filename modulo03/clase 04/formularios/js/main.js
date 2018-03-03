var nombre;
nombre="JC";


//$("#btn-formulario").click(tarea)
// function tarea(){ }

$("#btn-formulario").click(function(){
	event.preventDefault();
	var usuario;
	usuario=$("#inp-usuario").val();
	password=$("#inp-password").val();	
	
	console.log(usuario);
//alert("hizo click en el boton del formulario");
// $.trim() -> te permite limpiar los espacios en blanco
// de los extremos
//$.trim()

var usuariSE=$.trim(usuario);
var passwordSE=$.trim(password);

if(usuariSE==""){
	console.log("ingresa tus datos antes de continuar")
}
else{
	// usuarioSE="xyz"
	if(usuariSE=="admin"){
		console.log("usuario admin");
		if(passwordSE=="1234"){
			$("#formularioregistro").submit();	
		}
		5246010008488399
		else
		{
			//alert("datos ingresados incorrectos")
			window.location="error.html"
		}

	}
	else{
		console.log("usuario incorrecto");
	}
}
/*
if(usuario=="admin"){
	console.log("el usuario es correcto")
}
else{
	console.log("el usario es incorrecto");
}
*/



var usuario_
var password_
var data={
	usuario:usuario_,
	password:password_
}

$.getJSON("domino.com/serviciologin.php",data,function(data){
	if(data==true){
		el usuario existe
	}
	else{
		el usuario no existe
	}

})





})
