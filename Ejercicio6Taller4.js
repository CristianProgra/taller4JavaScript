 //6.  Cree un conversor de temperatura, investigando la fórmula para pasar grados de Celsius a Fahrenheit y viceversa, 
//       pida al usuario la temperatura a convertir y muestra en pantalla lo siguiente: 
//    ● Si la Temperatura es menos  0°C  o 32°F : Nos congelamos 
//    ● Si la Temperatura es entre de 5°C a 15°C  o 33°F a 50°F : Esta haciendo frio
//    ● Si la Temperatura es entre de 16°C a 25°C  o 51°F a 77°F : Está templado el dia
//    ● Si la Temperatura es más de 26°C  o 78°F : Tiene fiebre o es el apocalipsis.

let escala = prompt("¿En qué escala está la temperatura? (C para Celsius, F para Fahrenheit):").toUpperCase();

if (escala === 'C') {
    let Celsius = parseFloat(prompt("Grados Celsius:"));
    let convertir = 1.8 * Celsius + 32;
    document.write("La temperatura en grados Fahrenheit es: " + convertir + "<br>");

    if (Celsius < 0 || convertir < 32) {
        document.write("Nos congelamos");
    } else if (Celsius >= 5 && Celsius <= 15) {
        document.write("Está haciendo frío");
    } else if (Celsius >= 16 && Celsius <= 25) {
        document.write("Está templado el día");
    } else if (Celsius > 26) {
        document.write("Tiene fiebre o es el apocalipsis");
    }
} else if (escala === 'F') {
    let Fahrenheit = parseFloat(prompt("Grados Fahrenheit:"));
    let convertir = (Fahrenheit - 32) * 5/9;
    document.write("La temperatura en grados Celsius es: " + convertir + "<br>");

    if (convertir < 0 || Fahrenheit < 32) {
        document.write("Nos congelamos");
    } else if (convertir >= 5 && convertir <= 15) {
        document.write("Está haciendo frío");
    } else if (convertir >= 16 && convertir <= 25) {
        document.write("Está templado el día");
    } else if (convertir > 26) {
        document.write("Tiene fiebre o es el apocalipsis");
    }
} else {
    document.write("Escala no válida");
}
