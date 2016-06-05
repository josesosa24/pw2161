var inicio= function() {
	var publickey = 'ffb4fa1c5ac739dd8b2d99a932872908'
	var privatekey= '16c65fa71a03c278be054a1d29ab157dcb3d352c'
	
var clicSearch =function() {
	var inputContent=$('#myInput').val()
			$.ajax({
			  url: 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=917a152f0e410214e0bec334a3bf6128&hash=64c0db5c2d22a1c31bf436e4ecc37edd&nameStartsWith='.concat(inputContent),
			  dataType: 'json',
			  async: false,
			  global:false,
			  success: function(data){
			  	console.log(data)
			  	$('#name').html(data.data.results[0].name)
			  	$('#description').html(data.data.results[0].description)
			  	path = data.data.results[0].thumbnail.path
			  	extension=data.data.results[0].thumbnail.extension
			  	$('#picture').attr('src',path.concat(".").concat(extension))
			  }
		});
			//alert(inputContent)
	}

	$('#myButton').on('click',clicSearch)
}
$(document).on("ready", inicio)



