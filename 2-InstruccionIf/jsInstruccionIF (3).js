function mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;

	if (edad>17) 
	{
		alert ("si, es mayor de edad.");
	}
	if (edad<18)
	{
		alert ("si, es menor de edad.");
	}

}//FIN DE LA FUNCIÓN