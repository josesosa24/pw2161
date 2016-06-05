var countclicks=0;
var player1=0;
var player2=0;
var matches=0;
var tie=0;

var td1=0;
var td2=0;
var td3=0;
var td4=0;
var td5=0;
var td6=0;
var td7=0;
var td8=0;
var td9=0;

function semireload() {
	document.getElementById('td1').innerHTML='&nbsp;';
	document.getElementById('td2').innerHTML='&nbsp;';
	document.getElementById('td3').innerHTML='&nbsp;';
	document.getElementById('td4').innerHTML='&nbsp;';
	document.getElementById('td5').innerHTML='&nbsp;';
	document.getElementById('td6').innerHTML='&nbsp;';
	document.getElementById('td7').innerHTML='&nbsp;';
	document.getElementById('td8').innerHTML='&nbsp;';
	document.getElementById('td9').innerHTML='&nbsp;';

	countclicks=0;
	matches++;
	document.getElementById('matches').innerHTML=matches;
	document.getElementById('player1').innerHTML=player1;
	document.getElementById('player2').innerHTML=player2;
}

function setVariables() {
	td1=document.getElementById('td1').innerHTML;
	td2=document.getElementById('td2').innerHTML;
	td3=document.getElementById('td3').innerHTML;
	td4=document.getElementById('td4').innerHTML;
 	td5=document.getElementById('td5').innerHTML;
	td6=document.getElementById('td6').innerHTML;
	td7=document.getElementById('td7').innerHTML;
	td8=document.getElementById('td8').innerHTML;
	td9=document.getElementById('td9').innerHTML;
}

function player1win() {
	var flag=false;
	setVariables();
	if(td1=='X' && td2=='X' && td3=='X') {
		player1++;
		alert('Player 1 wins');
		flag=true;
		semireload();
	}

	if(td4=='X' && td5=='X' && td6=='X') {
		player1++;
		alert('Player 1 wins');
		flag=true;
		semireload();
	}

	if(td7=='X' && td8=='X' && td9=='X') {
		player1++;
		alert('Player 1 wins');
		flag=true;
		semireload();
	}

	if(td1=='X' && td4=='X' && td7=='X') {
		player1++;
		alert('Player 1 wins');
		flag=true;
		semireload();
	}

	if(td2=='X' && td5=='X' && td8=='X') {
		player1++;
		alert('Player 1 wins');
		flag=true;
		semireload();
	}

	if(td3=='X' && td6=='X' && td9=='X') {
		player1++;
		alert('Player 1 wins');
		flag=true;
		semireload();
	}

	if(td1=='X' && td5=='X' && td9=='X') {
		player1++;
		alert('Player 1 wins');
		flag=true;
		semireload();
	}

	if(td3=='X' && td5=='X' && td7=='X') {
		player1++;
		alert('Player 1 wins');
		flag=true;
		semireload();
	}

	return flag;
}

function player2win() {
	setVariables();
	var flag=false;

	if(td1=='O' && td2=='O' && td3=='O') {
		player2++;
		alert('Player 2 wins');
		flag=true;
		semireload();
	}

	if(td4=='O' && td5=='O' && td6=='O') {
		player2++;
		alert('Player 2 wins');
		flag=true;
		semireload();
	}

	if(td7=='O' && td8=='O' && td9=='O') {
		player2++;
		alert('Player 2 wins');
		flag=true;
		semireload();
	}

	if(td1=='O' && td4=='O' && td7=='O') {
		player2++;
		alert('Player 2 wins');
		flag=true;
		semireload();
	}

	if(td2=='O' && td5=='O' && td8=='O') {
		player2++;
		alert('Player 2 wins');
		flag=true;
		semireload();
	}

	if(td3=='O' && td6=='O' && td9=='O') {
		player2++;
		alert('Player 2 wins');
		flag=true;
		semireload();
	}

	if(td1=='O' && td5=='O' && td9=='O') {
		player2++;
		alert('Player 2 wins');
		flag=true;
		semireload();
	}

	if(td3=='O' && td5=='O' && td7=='O') {
		player2++;
		alert('Player 2 wins');
		flag=true;
		semireload();
	}

	return flag;
}

function checkTie() {
	setVariables();
	if((td1!="&nbsp;") && (td2!="&nbsp;")&&(td3!="&nbsp;")&&(td4!="&nbsp;")&&(td5!="&nbsp;")&&(td6!="&nbsp;")&&(td7!="&nbsp;")&&(td8!="&nbsp;")&&(td9!="&nbsp;")&&(player2win()==false)&&(player1win()==false)) {
		alert("empate");
		semireload();
	}
}

function putsomething(td_inden) {
	var check1= document.getElementById(td_inden).innerHTML;
	if(check1=="&nbsp;") {
		if(countclicks%2 == 0) {
			document.getElementById(td_inden).innerHTML='X';
			insertar(td_inden,'X')
		}
		else {

			document.getElementById(td_inden).innerHTML='O';
			insertar(td_inden,'O')
		}
		countclicks++;
	}
	else
	{

	}
	player2win();
	player1win();	
	checkTie();
}
function insertar(tdId,turno){
	var parametros= "accion=insertar" + "&id=" +tdId + "&turno=" +turno;
	$.ajax({
		beforeSend:function() { 
		
		},
			cache: false,
			type:'POST',
			dataType: 'json',
			url: 'php/funciones.php',
			data: parametros,
			success: function(response) {
				if(response.respuesta) {
					alert('Espera tu próximo turno')
				}
			},
			error: function(xhr,ajaxOptionx, thrownError) {
				alert("We're so sorry, something was wrong")
			}
		
		})

}
function inicia() {
	var parametros= "accion=inicia"
		
	$.ajax({
		beforeSend:function() { 
		
		},
			cache: false,
			type:'POST',
			dataType: 'json',
			url: 'php/funciones.php',
			data: parametros,
			success: function(response) {

				if(response.respuesta) {
					
				}
			},
			error: function(xhr,ajaxOptionx, thrownError) {
				alert("We're so sorry, something was wrong")
			}

		})

	}

function refresh() {
	var parametros= "accion=refresh"
	$.ajax({
		beforeSend:function() { 
		},
			cache: false,
			type:'POST',
			dataType: 'json',
			url: 'php/funciones.php',
			data: parametros,
			success: function(response) {

				if(response.respuesta) {
					for(var i=0;i<response.tabla.length;i++){
						
						if(response.tabla[i].renglon == 1 && response.tabla[i].columna == 1){
						   document.getElementById("td1").innerHTML=response.tabla[i].turno;
						}
						if(response.tabla[i].renglon == 1 && response.tabla[i].columna == 2){
						   document.getElementById("td2").innerHTML=response.tabla[i].turno;
						}
						if(response.tabla[i].renglon == 1 && response.tabla[i].columna == 3){
						   document.getElementById("td3").innerHTML=response.tabla[i].turno;
						}
						if(response.tabla[i].renglon == 2 && response.tabla[i].columna == 1){
						   document.getElementById("td4").innerHTML=response.tabla[i].turno;
						}
						if(response.tabla[i].renglon == 2 && response.tabla[i].columna == 2){
						   document.getElementById("td5").innerHTML=response.tabla[i].turno;
						}
						if(response.tabla[i].renglon == 2 && response.tabla[i].columna == 3){
						   document.getElementById("td6").innerHTML=response.tabla[i].turno;
						}
						if(response.tabla[i].renglon == 3 && response.tabla[i].columna == 1){
						   document.getElementById("td7").innerHTML=response.tabla[i].turno;
						}
						if(response.tabla[i].renglon == 3 && response.tabla[i].columna == 2){
						   document.getElementById("td8").innerHTML=response.tabla[i].turno;
						}
						if(response.tabla[i].renglon == 3 && response.tabla[i].columna == 3){
						   document.getElementById("td9").innerHTML=response.tabla[i].turno;
						}
					}
					
				}
			},
			error: function(xhr,ajaxOptionx, thrownError) {
				alert("We're so sorry, something was wrong")
			}

		})


}

