/*
	b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en
una sola reserva.

la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva

*/
function mostrar()
{
	var nombre;
	var cantidadDePersona;
	var cantidaDeDias;
	var formaDePago;

	var respuesta;
	var maximoCantidadDePersonas;
	var maximoCantidadDePersonasNombre;
	var maximoCantidadDeDiasHospedado;
	var maximoCantidadDeDiasHospedadoCantidadDePersona;

	var contador;
	var contadorQR;
	var contadorEfete;
	var contadorTarjeta;
	
	var acumulador;
	var masUtilizada;


	acumulador=0;
	contadorQR=0;
	contadorTarjeta=0;
	contadorEfete=0;
	contador=0;
	respuesta="S";

	while(respuesta=="S")
	{	
		do
		{
			nombre=prompt("Ingrese su nombre");
		}while(!isNaN(nombre) );

		do
		{
			cantidadDePersona=prompt("Ingrese la cantidad de personas que son.");
			cantidadDePersona=parseint(cantidadDePersona);
		}while(isNaN(cantidadDePersona) || cantidadDePersona<1 && cantidadDePersona>20);

		do
		{
			cantidaDeDias=prompt("Ingrese la cantidad de dias que son.");
			cantidaDeDias=parseint(cantidaDeDias);
		}while(isNaN(cantidaDeDias) || cantidaDeDias<1 && cantidaDeDias>31);

		do
		{
			formaDePago=prompt("Ingrese la forma de pago.");
		}while(!isNaN(formaDePago) || formaDePago!="efectivo" || formaDePago!="QR" || formaDePago!="tarjeta");		

		//todo validado

		if(contador==0 || cantidadDePersona>maximoCantidadDePersonas)
		{
			maximoCantidadDePersonas=cantidadDePersona;
			maximoCantidadDePersonasNombre=nombre;
		}

		if(contador==0 || cantidadDeDias>maximoCantidadDeDiasHospedado)
		{
			maximoCantidadDeDiasHospedado=cantidadDeDias;
			maximoCantidadDeDiasHospedadoCantidadDePersona=cantidadDePersona;
		}

		switch(formaDePago)
		{
			case "qr":
				contadorQR++;

				break;
			case"efectivo":
			contadorEfete++;
				break;
			default:
			contadorTarjeta++;
				break;
		}

		respuesta=prompt("S para continuar.");
		contador++;
	}//fin del while
	promedio=acumulador/contador

	if(contadorQR>contadorTarjeta&& contadorQR>contadorEfete)
	{
		masUtilizada="qr";
	}else
	{
		if(contadorTarjeta>contadorEfete)
		{
			masUtilizada="tarjeta";
		}else
		{
			masUtilizada="efectivo";
		}
	}
	document.write
}
