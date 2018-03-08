
//$.getJSON("url",datosparawebservice,function(valor){})
var url="https://jsonplaceholder.typicode.com/users";
$.getJSON(url,function(valor){
	console.log(valor)
	for(var i=0;i<10;i++){
		var nombre=valor[i].name;
		var website="http://"+valor[i].website;
		var email=valor[i].email;
		$(".listado").append("<article><h2>"+nombre+"</h2><p>"+email+"</p><a target='_blank' href='"+website+"'>Website</</<article>")
				
	}
})