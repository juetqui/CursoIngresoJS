/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var CantidadDeLamparas;
 	var Marca;
 	var PrecioBruto;
 	var descuento;
 	var PrecioFinal;

 	CantidadDeLamparas=document.getElementById('Cantidad').value;
 	CantidadDeLamparas=parseInt(CantidadDeLamparas);
 	Marca=document.getElementById('Marca').value;

 	PrecioBruto=CantidadDeLamparas*35;
 	console.info("Precio Bruto= ",PrecioBruto);
 	descuento=0;

 	if(CantidadDeLamparas>5)
 	{
 		descuento=50;
 	}
 	else
 	{
 		if(CantidadDeLamparas==5)
 		{
 			if(Marca=="ArgentinaLuz")
 			{
 				descuento=40;
 			}
 			else
 			{
 				descuento=30;
 			}
 		}
 		else
 		{
 			if(CantidadDeLamparas==4)
 			{
 				if(Marca=="ArgentinaLuz"||Marca=="FelipeLamparas")
 				{
 					descuento=25;
 				}
 				else
 				{
 					descuento=20;
 				}
 			}
 			else
 			{
 				if(CantidadDeLamparas==3)
 				{
 					if(Marca=="ArgentinaLuz")
 					{
 						descuento=15;
 					}
 					else
 					{
 						if(Marca=="FelipeLamparas")
 						{
 							descuento=10;
 						}
 						else
 						{
 							descuento=5;
 						}
 					}
 				}
 			}
 		}
 	}

 	PrecioFinal=PrecioBruto - PrecioBruto*descuento/100;

 	if(PrecioFinal>120)
 	{
 		
 	}
 	console.info("Precio Final= ",PrecioFinal);
}
