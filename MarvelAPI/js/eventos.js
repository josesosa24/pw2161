var inicio= function() {
	var publickey = 'ffb4fa1c5ac739dd8b2d99a932872908'
	var privatekey= '16c65fa71a03c278be054a1d29ab157dcb3d352c'

var buildTable= function(number,image,name, description,comics) {
	var table = document.getElementById("myTable");
	
		var row = table.insertRow(1)
		var cell1=row.insertCell(0)	
		var cell2=row.insertCell(1)
		var cell3=row.insertCell(2)
		var cell4=row.insertCell(3)
		var cell5=row.insertCell(4)		
		
		cell1.innerHTML= number
		$("<img class='picture' src ="+image+">").appendTo(cell2);
		cell3.innerHTML = name
		cell4.innerHTML = description
		cell5.innerHTML = comics
}

var clearTable=function() {
	  $("#myTable").find("tr:gt(0)").remove();
}
	
var clicSearch =function() {
	clearTable()
	var inputContent=$('#myInput').val()
			$.ajax({
			  url: 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=917a152f0e410214e0bec334a3bf6128&hash=64c0db5c2d22a1c31bf436e4ecc37edd&nameStartsWith='.concat(inputContent),
			  dataType: 'json',
			  async: false,
			  global:false,
			  success: function(data){
			  	console.log(data)
			  	var coincidences=data.data.count
			  	$('#coincidences').html(coincidences)

			  	for (var i=0; i<coincidences; i++) {
			  		var ib=i
			  		var comicsNumber= data.data.results[i].comics.available
			  		
			  		path = data.data.results[i].thumbnail.path
			  		extension=data.data.results[i].thumbnail.extension
			  		if (data.data.results[i].description=='') {
			  			buildTable(coincidences-i,path.concat(".").concat(extension),data.data.results[i].name,'Description no available',comicsNumber)
			  		}
			  		else {
			  			buildTable(coincidences-i,path.concat(".").concat(extension),data.data.results[i].name,data.data.results[i].description,comicsNumber)	
			  		}
			  		
			  	}
			  	  //	$('#comics').html(data.data.results[0].comics.items[0].name)
			  }
		});
			//alert(inputContent)
	}

	$('#myButton').on('click',clicSearch)
}
$(document).on("ready", inicio)



