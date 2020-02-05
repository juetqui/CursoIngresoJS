/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var resultado;
	var porcentaje;

	importe=document.getElementById('importe').value;
	importe=parseInt(importe);

	porcentaje=0.75;

	resultado=importe*porcentaje;

	document.getElementById('resultado').value=resultado;
}
