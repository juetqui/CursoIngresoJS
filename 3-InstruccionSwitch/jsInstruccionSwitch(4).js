function mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	switch(mesDelAño)
	{
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 31 dias.");
			break;
		case "Febrero":
			alert("Este mes tiene 28 dias.");
			break;
		default:
			alert("Este mes tiene 30 dias.");	
	}
}//FIN DE LA FUNCIÓN