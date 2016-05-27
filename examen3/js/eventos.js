var iniciaApp = function() {

	var AltaAlmacen = function() {
		event.preventDefault();
		//alert($("#frmAltaUsuarios").serialize());
		var datos = $("#frmAltaAlmacen").serialize();
		var parametros = "accion=AltaAlmacen&"+datos+
		                 "&id="+Math.random();
		$.ajax({
			beforeSend:function(){
				console.log("Guardar almacen");
			},
			cache: false,
			type: "POST",
			dataType: "json",
			url:"php/funciones.php",
			data:parametros,
			success: function(response){
				if(response.respuesta == true ){
					alert("Almacen registrado correctamente");
					$('#frmAltaAlmacen > input').val('');
				}
				else {
					alert("No se pudo guardar la información");
				}
			},
			error: function(xhr,ajax,thrownError) { 

			}
		});
	}

	var Altas= function(){
		$('#altaAlmacen').show("slow")
		$('#consultaAlmacen').hide()
	}

	var Inicio= function(){
		$('#altaAlmacen').hide()
		$('#consultaAlmacen').hide()

	}

	var Consulta= function(){
		$('#altaAlmacen').hide()
		$('#consultaAlmacen').show()
	}

	var Consultas= function () {
		event.preventDefault()
		Consulta()
		//$("#altaUsuarios").hide()
		//$("#consultasUsuario").show("slow")
		var parametros= "accion=consultas"+"&id="+Math.random()

		$.ajax({
			beforeSend:function() { 
				console.log('Consultas usuarios')
			},
			cache: false,
			type:'POST',
			dataType: 'json',
			url: 'php/funciones.php',
			data: parametros,
			success: function(response) {

				if(response.respuesta) {
					//alert(response.tabla)
					$('#mylittletable').html(response.tabla)
				}
			},
			error: function(xhr,ajaxOptionx, thrownError) {
				alert("We're so sorry, something was wrong")
			}

		})
	}

	$("#btnAltas").on("click",Altas);	
	$("#btnInicio").on("click",Inicio);
	$("#frmAltaAlmacen").on("submit",AltaAlmacen);

	$("#btnConsulta").on("click",Consultas);
}
$(document).on("ready",iniciaApp);