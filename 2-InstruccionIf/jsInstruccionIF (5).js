function mostrar()
{
//tomo la edad  
	var edad;
	edad=document.getElementById('edad').value;
	if (edad<13 || edad>17) 
	{
		alert ("Usted no es adolencente");
	}
	/*var edad;
	edad=document.getElementById('edad').value;
	if (!(edad>12 && edad<18)) 
	{
		alert ("Usted es adolencente");
	}
	*/
}//FIN DE LA FUNCIÓN