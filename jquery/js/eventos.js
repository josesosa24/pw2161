// jquery(etiquetas, clases, id)
// $ alias para jquery
// $==jquery
//MAIN
var inicio= function() {
	//Preparar los eventos de todos los objetos
	var clicBoton= function() {
		console.log("Clic del botón")
		// $(".anuncioWeb").html("Clic del boton")
		$(".anuncioWeb").append("Clic del boton") //Agrega al contenido que ya existe
	}

	$("#miBoton").on("click", clicBoton)
}

$(document).on("ready", inicio)