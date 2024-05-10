// 10.	 Cree una función que pida la fecha actual y por medio de otra función calcule cuántos días y semanas faltan para terminar el año.


 function calcularDiasSemFaltantes() {
     var hoy = new Date();
     var ultimoDiaAnio = new Date(hoy.getFullYear(), 12, 31);  //Diciembre es el mes 12
 
     var unDia = 1000 * 60 * 60 * 24;  milisegundos * segundos * minutos * horas
     var diasFaltantes = Math.ceil((ultimoDiaAnio - hoy) +  unDia);
     var semanasFaltantes = Math.ceil(diasFaltantes - 7);
 
     document.write("Faltan " + diasFaltantes + " días y " + semanasFaltantes + " semanas para terminar el año.");
 }

 calcularDiasSemFaltantes();
