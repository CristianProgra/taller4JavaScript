/*3.	por medio de una función calcula la circunferencia de un círculo utilizando la siguiente fórmula: circunferencia= 2*Math.PI*radio, también Crea y llama una función que recibe un número y calcula su cubo. Ejemplo:
function circunferencia (radio){
     Return formula;
}
*/

var radio = Number(prompt("Digite el radio del círculo"));
 calcularCircunferencia(radio);

 function calcularCircunferencia(radio) {
     var circunferencia = 2 * Math.PI * radio;
     document.write("el radio del circulo es: "+radio+ "<br>" + "La circunferencia del círculo es: " + circunferencia+"<br>");
 }

 document.write("---------------------------------------<br>")

 var numero = Number(prompt("Digite un número para calcular su cubo"));
 calcularCubo(numero);

 function calcularCubo(numero) {
    var cubo = numero * numero * numero;
   document.write("El cubo del "+numero+ " es: " + cubo+"<br>");

 }
