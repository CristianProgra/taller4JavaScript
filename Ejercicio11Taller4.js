//11.	Cree un listado de compras, con función que pida el número de productos, nombre y valor del producto por medio de otra función imprima la información digitadas.

// 1 -  arroz $ 2.500 x 3 = 7.500
// 2 - aceite $ 4.500 x 1 = 4.500
// 3 - azúcar $ 2000 x 2 = 4.000
// —-----------------------------------
// 		Total Mercado    16.000


 function pedirProductos(numPro){
     var totalCompra = 0;
      for(var x = 1; x <= numPro; x++){
         var nombrePro = prompt("digite nombre del producto");
         var precioPro = Number(prompt("digite precio del producto"));
         var canPro = Number(prompt("digite cantidad de : " + nombrePro));
         var totalPro = precioPro * canPro;
         document.write(x + " " + nombrePro + " $ " + precioPro + " x " + canPro + " = " + totalPro + "<br>");
         totalCompra += totalPro;
      }

      return totalCompra;
 }

 function calcularIva( total ){
     var porcenIva = total * 19/100   //total  * 0.19
     var totalConIva = precioIva  + total;
     document.write ("-------------------<br>");
     document.write("total compra es :" + total  + "<br>");
     document.write ("Total compra con iva:" + totalConIva + "<br>");
 }

 var numeroProductos = Number(prompt("digite numero de producto a comprar"));
 var totaldeCompra = pedirProductos( numeroProductos );
  calcularIva(totaldeCompra);

