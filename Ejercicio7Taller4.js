// 7.   Calcule el índice de masa muscular de una persona con la siguiente fórmula (IMC=peso/(altura x altura)), pidiendo como datos su altura y peso. imprima en pantalla lo siguiente: 
// a.    Si el IMC es por debajo de 18.5 : Bajo peso debe ir al nutricionista
// b.   Si el IMC es 18.5—24.9 : Normal
// c.   Si el IMC es 25.0—29.9 : Sobrepeso 
// d.   Si el IMC es 30.0 o más : Obeso debe ir al nutricionista

 let peso = parseFloat(prompt("Ingrese su peso en kg:"));
 let altura = parseFloat(prompt("Ingrese su altura en metros:"));

  operacion
 let imc = peso / (altura * altura);

 if (imc < 18.5) {
     document.write("Bajo peso, debe ir al nutricionista");
 } else if (imc >= 18.5 && imc <= 24.9) {
     document.write("Normal");
 } else if (imc >= 25.0 && imc <= 29.9) {
     document.write("Sobrepeso");
 } else {
     document.write("Obeso, debe ir al nutricionista");
 }

