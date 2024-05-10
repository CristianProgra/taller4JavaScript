/**
 * 	Crea y llama las funciones necesarias para recibir la velocidad en Kilómetros 
 *  y mostrarlas en metros y millas.
 */

function convertirAKilometrosAMetrosPorSegundo(velocidadEnKilometros) {
    return velocidadEnKilometros * 1000 / 3600; // 1 km/h = 1000 m / 3600 s
}

// Función para convertir velocidad de kilómetros a millas por hora
function convertirAKilometrosAMillasPorHora(velocidadEnKilometros) {
    return velocidadEnKilometros / 1.60934; // 1 milla = 1.60934 km
}



// Ejemplo de uso
var velocidadEnKilometros = 60; // Velocidad en kilómetros por hora

var velocidadEnMetrosPorSegundo = convertirAKilometrosAMetrosPorSegundo(velocidadEnKilometros);
console.log("Velocidad en metros por segundo:", velocidadEnMetrosPorSegundo);

var velocidadEnMillasPorHora = convertirAKilometrosAMillasPorHora(velocidadEnKilometros);
console.log("Velocidad en millas por hora:", velocidadEnMillasPorHora);