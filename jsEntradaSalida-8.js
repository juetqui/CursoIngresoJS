/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
	var divisor;
	var	operacion;

	dividendo=document.getElementById('numeroDividendo').value;
	dividendo=parseInt(dividendo);

	divisor=document.getElementById('numeroDivisor').value;
	divisor=parseInt(divisor);

	operacion=dividendo%divisor;

	alert ("El resto es "+operacion+" .");
}
