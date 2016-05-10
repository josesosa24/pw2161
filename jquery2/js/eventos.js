var iniciaApp= function(){

	var validaEntrada =function(){

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

		console.log('Se disparo el submit')
	}

	$('#frmValidaEntrada').on('submit',validaEntrada)

}
$(document).on('ready',iniciaApp)