
var operador="";

function igual() {
	var valor1=document.calculadora.operando1.value;
	var valor2=document.calculadora.operando2.value;

	document.calculadora.resultado.value=eval(valor1+operador+valor2);
}

function numeros (num) {
	
	if(operador == "") {
		var valor=document.calculadora.operando1.value;

		if(valor == "0") { //Vaciar la caja
			document.calculadora.operando1.value="";
			//concatenaer valores
		}
		document.calculadora.operando1.value=document.calculadora.operando1.value+num;
	}
	else {
		var valor=document.calculadora.operando2.value;

		if(valor == "0") { //Vaciar la caja
			document.calculadora.operando2.value="";
			//concatenaer valores
		}
		document.calculadora.operando2.value=document.calculadora.operando2.value+num;
	}
}

function operadores (op) {
	operador=op;
}
