/*
De los movimientos de un banco necesito saber el nombre del cliente, edad (debe ser mayor de edad),
sexo, tipo de transaccion (extraccion o deposito) e importe (validar que no sea negativo).

nombre		edad	sexo	tipo			importe
jose		37		M 		extraccion		1000
maria		40		F 		deposito		2000
jesus		33		M 		extraccion		1500
melchor		20		M 		extraccion		1300

1)Promedio de edad
2)Nombre del mas joven
3)Cantidad de hombres;
4)Cantidad de mujeres;
5)sexo del importe mas alto;
6)operacion mas utilizada;
7)importe del mas viejo;
*/
function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var tipoDeTransaccion;
	var importe;
	var Respuesta;
	var contador;

	var edadPromedio;
	var edadSuma;
	var edadClienteMinima;
	var edadClienteMinimaNombre;
	var cantidadDeHombres;
	var cantidadDeMujeres;
	var importeMasAlto;
	var importeMasAltoSexo;
	var tipoDeTransaccionMasUtilizada;
	var contadorExtraccion;
	var contadorDeposito;
	var clienteMasViejoEdad;
	var clienteMasViejoImporte;

	edad=0;
	Respuesta="S";
	edadSuma=0;
	contador=0;
	cantidadDeHombres=0;
	cantidadDeMujeres=0;
	importeMasAlto=0;
	contadorExtraccion=0;
	contadorDeposito=0;
	clienteMasViejoImporte=0;
	

	while (Respuesta=="S")
	{
		do
		{
			nombre=prompt("Ingrese su nombre");
		}while(!isNaN(nombre));

		do
		{
			edad=prompt("Ingrese su edad");
			edad=parseInt(edad);
		}while(isNaN(edad) || edad<18 || edad>112 );

		do
		{
			sexo=prompt("Ingrese su sexo");
		}while(!isNaN(sexo) || sexo!="F" && sexo!="M" );

		do
		{
			tipoDeTransaccion=prompt("Ingrese su tipo de transaccion");
		}while(!isNaN(tipoDeTransaccion) || tipoDeTransaccion!="extraccion" && tipoDeTransaccion !="deposito");

		do
		{
			importe=prompt("Ingrese su importe");
			importe=parseInt(importe);
		}while(isNaN(importe) || importe<0 || importe>5000);

		//validar datos

		//1)		
		edadSuma=edadSuma+edad;
		edadPromedio=edadSuma/contador;
		
		//2)
		if(contador==0 || edadClienteMinima>edad)
		{
			edadClienteMinima=edad;
			edadClienteMinimaNombre=nombre;
		}
		

		//3)
		if(contador==0 || sexo=="M")
		{
			cantidadDeHombres++;
		}
		

		//4)
		if(contador==0 || sexo=="F")
		{
			if(sexo=="F")
			{
				cantidadDeMujeres++;
			}
		}
		

		//5)
		if(contador==0 || importeMasAlto<importe)
		{
			importeMasAlto=importe;
			importeMasAltoSexo=sexo;
		}
		

		//6)
		switch(tipoDeTransaccion)
		{
			case "extraccion":
				contadorExtraccion++;
				break;
			default:
			contadorDeposito++;
				break;
		}

		//7)
		if(contador==0 || clienteMasViejoEdad<edad)
		{
			clienteMasViejoEdad=edad;
			clienteMasViejoEdadImporte=importe;
		}
		

		contador++;
		Respuesta=prompt("ingrese S para continuar");
	}

	edadPromedio=edadSuma/contador;

	if(contadorExtraccion>contadorDeposito)
	{
		tipoDeTransaccionMasUtilizada="extraccion";
	}else
	{
		tipoDeTransaccionMasUtilizada="deposito";
	}
	document.write("El promedio de edad es: "+edadPromedio);
	document.write("<br>La persona mas joven es: "+edadClienteMinimaNombre);
	document.write("<br>La cantidad de hombres es: "+cantidadDeHombres);
	document.write("<br>La cantidad de mujeres es: "+cantidadDeMujeres);
	document.write("<br>El sexo del importe mas alto es: "+importeMasAltoSexo);
	document.write("<br>La operacion mas utilizada es: "+tipoDeTransaccionMasUtilizada);
	document.write("<br>El importe del mas viejo es "+clienteMasViejoEdadImporte);
}
