/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero;
	var segundoNumero;
	var	operacion;

	primerNumero=document.getElementById('numeroUno').value;
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('numeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	operacion=primerNumero+segundoNumero;

	alert ("la Suma es "+operacion);
}

function restar()
{
	var primerNumero;
	var segundoNumero;
	var	operacion;

	primerNumero=document.getElementById('numeroUno').value;
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('numeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	operacion=primerNumero-segundoNumero;

	alert ("la Resta es "+operacion);
}

function multiplicar()
{ 
	var primerNumero;
	var segundoNumero;
	var	operacion;

	primerNumero=document.getElementById('numeroUno').value;
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('numeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	operacion=primerNumero*segundoNumero;

	alert ("la Multiplicación es "+operacion);
}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var	operacion;

	primerNumero=document.getElementById('numeroUno').value;
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('numeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	operacion=primerNumero/segundoNumero;

	alert ("El resultado es "+operacion);
}

