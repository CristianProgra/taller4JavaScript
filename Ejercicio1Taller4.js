
// Crea y llama una función que recibe el ancho y el alto de un rectángulo 
// y calcula su superficie.  
// Fórmula: superficie = ancho * alto.

function calcularSuperficie(ancho, alto) {
    var superficie = ancho * alto;
    return superficie;
}

// Ejemplo de uso:
var ancho = 5;
var alto = 10;
var superficieRectangulo = calcularSuperficie(ancho, alto);
console.log("La superficie del rectángulo es: " + superficieRectangulo);