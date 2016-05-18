var iniciaApp= function(){

	var validaEntrada =function() {

		event.preventDefault() //Solo deja el evento que se este validando en la funcion
		var user= $('#txtUser').val()
		var pasword=$('#txtPassword').val()

		if(user=="") {
			alert('Ingresa un usuario')
			$('#txtUser').focus();
		}
		if(pasword=="") {
			alert('Ingresa una contraseña')
			$('#txtPassword').focus()
		}

		//Verificar usuario y contraseña
		var parameters="accion=validaEntrada"+"&usuario="+user+"&clave="+pasword+"&id="+Math.random()
		$.ajax({
			beforeSend:function() { 
				console.log('validar al usuario')
			},
			cache: false,
			type:'POST',
			dataType: 'json',
			url: 'php/funciones.php',
			data: parameters,
			success: function(response) {
				if(response.respuesta) {
					alert('Welcome to the jungle')
					$('#datosUsuario').hide()
					$('nav').show("slow")
				}
				else {
					alert('Usuario y/o contraseña incorrectos')
				}
			},
			error: function(xhr,ajaxOptionx, thrownError) {
				console.log('something was wrong :c')
				alert('Usuario y/o contraseña incorrectos')
			}

		})
		// if(user=='pw' && pasword=='1234') {
		// 	alert('Welcome to the jungle')
		// 	$('#datosUsuario').hide()
		// 	$('nav').show("slow")

		// }
		// else {
		// 	alert('You must not be here user adn password incorrect')
		// }


		console.log('Se disparo el submit')
	}

	var altas= function() {
		$('#altaUsuarios').show('slow')
	}

	var altaUsuario= function() {
		//alert($('#frmAltaUsuarios').serialize())
		event.preventDefault()
		var parametros="accion=guardarUsuario&"+ $('#frmAltaUsuarios').serialize()+"&id="+Math.random()

		$.ajax({
			beforeSend:function() { 
				console.log('Guardar Usuario')
			},
			cache: false,
			type:'POST',
			dataType: 'json',
			url: 'php/funciones.php',
			data: parametros,
			success: function(response) {
				if(response.respuesta) {
					alert("Usuario registrado exitosamente")
				}
				else {
					alert("We're so sorry, something was wrong2")
				}
			},
			error: function(xhr,ajaxOptionx, thrownError) {
				alert("We're so sorry, something was wrong")
			}

		})

	}

	$('#frmValidaEntrada').on('submit',validaEntrada)
	$('#btnAltas').on('click', altas)
	$('#frmAltaUsuarios').on('submit', altaUsuario)

}
$(document).on('ready',iniciaApp)