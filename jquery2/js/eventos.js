var iniciaApp= function(){

	var validaEntrada =function() {

		event.preventDefault() //Solo deja el evento que se este validando en la funcion
		var user= $('#txtUser').val()
		var pasword=$('#txtPassword').val()

		if(user=="") {
			alert('Ingresa un usuario')
			$('#txtUser').focus()
		}
		if(pasword=="") {
			alert('Ingresa una contraseña')
			$('#txtPassword').focus()
		}

		//Verificar usuario y contraseña
		if(user=='pw' && pasword=='1234') {
			alert('Welcome to the jungle')
			$('#datosUsuario').hide()
			$('nav').show("slow")

		}
		else {
			alert('You must not be here user adn password incorrect')
		}

		console.log('Se disparo el submit')
	}

	$('#frmValidaEntrada').on('submit',validaEntrada)

}
$(document).on('ready',iniciaApp)