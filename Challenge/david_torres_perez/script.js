	
function saludos(){
	var nombres = prompt("Por favor Ingresa tus nombres");
	var apellidos = prompt("Por favor Ingresa tus apellidos paternos y maternos");

	var error = "";
	if(nombres==""){
		error += "Debes de ingresarnos tus nombres para poder continuar\n";
	}

	if(apellidos==""){
		error += "Debes de ingresarnos tus apellidos para poder continuar\n";
	}

	if(error==""){
		alert("Hola [" + nombres + "] Registramos tus nombres correctamente al igual que tus apellidos [" + apellidos + "]\nBienvenido "+nombres +" "+ apellidos);
		fin(nombres,apellidos);
	}else{
		alert(error);
		saludos()
	}
}

function fin(nombres,apellidos){
	document.write("<b>Nombres: </b>" + nombres + "<br><b>Apellidos : </b>" + apellidos);
}



