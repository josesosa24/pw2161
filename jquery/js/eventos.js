// jquery(etiquetas, clases, id)
// $ alias para jquery
// $==jquery
//MAIN
var inicio= function() {
	//Preparar los eventos de todos los objetos
	var clicBoton= function() {
		console.log("Clic del botón")
		$(".anuncioWeb").html("Clic del boton")
		$(".anuncioWeb").append("Clic del boton") //Agrega al contenido que ya existe

	}
	var clicBoton2 =function() {
		alert("Boton 2")
	}
	var teclaUnInput= function(tecla) {
		if(tecla.which==13 ) {
			//que se posicione en otroInput 
			$("#otroInput").focus();
		}
	}

	$("#miBoton").off("click", clicBoton)
	$("#miBoton").on("click", clicBoton2)
	$("#unInput").on("keypress", teclaUnInput)

}

$(document).on("ready", inicio)