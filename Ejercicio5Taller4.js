5.   // Muestra todas las operaciones básicas(suma, resta, multi, división), pidiendo al usuario 2 números por medio de una función. 

 function sumar (n1,n2){
     procedimiento
     return n1 + n2;
 }
 function restar (n1,n2){
     procedimiento
     return n1 - n2;
 }
 function multiplicar (n1,n2){
     procedimiento
     return n1 * n2;
 }
 function dividir (n1,n2){
     procedimiento
     return n1 / n2;
 }

 var num1 = Number(prompt("digite un numero"))
 var num2 = Number(prompt("digite otro numero"))
 var resultadoSuma = sumar (num1,num2);
 var resultadoResta = restar (num1,num2);
 var resultadoMultiplicar = multiplicar (num1,num2);
 var resultadoDividir = dividir (num1,num2);

 document.write("el resultado de la suma es : "+resultadoSuma+"<br>");
 document.write("el resultado de la resta es : "+resultadoResta+"<br>");
 document.write("el resultado de la multiplicacion es : "+resultadoMultiplicar+"<br>");
 document.write("el resultado de la division es : "+resultadoDividir+"<br>");

