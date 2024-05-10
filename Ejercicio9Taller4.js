/**
 * 9.	 Cree una función que pida el precio de N productos y  por medio de otra función aumente el iva del 19% y diga al usuario el precio total a pagar los productos que compró y el precio de cada uno.
producto 1              = 2.500 
producto 2         	     = 4.500 
producto 3              = 2000 
subtotal                     10.000
Total A pagar   12.200

 */

 function PreciosIva(){
     var NumProductos = Number(prompt("Cuantos productos desea comprar"));
     var subtotal = 0;

 for(var i = 1; i <= NumProductos; i++){
     var precio = Number(prompt("Ingrese precio" + i));
     subtotal += precio;
 }

 for(var i = 1; i <= NumProductos; i++){
     document.write("Precio del producto---# " + i + "$" + precio + "<br>");
 }

 var Iva = 0.19;
 var totalIva = subtotal * Iva;

 document.write("Subtotal---$" + subtotal + "<br>");
 document.write("Total a pagar---$" + totalIva + "<br>");

 } 

 preciosIva();
