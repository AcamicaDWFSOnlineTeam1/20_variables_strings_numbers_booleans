const ALMACENAMIENTO_TANQUE_NAFTA = 45; // kilometros
const CONSUMO_COMBUSTIBLE_X_LITRO = 15; // KILOMETRO

distanciaARecorrer = parseFloat(prompt("Cúal es la disctancia?"));
resultadoRecargaCombustible = ((distanciaARecorrer * ALMACENAMIENTO_TANQUE_NAFTA) / (CONSUMO_COMBUSTIBLE_X_LITRO * ALMACENAMIENTO_TANQUE_NAFTA)) - ALMACENAMIENTO_TANQUE_NAFTA;

resultadoRecargaCombustible >= 675 ? alert("Tiene que recargar " + resultadoRecargaCombustible) : alert("Puede llegar a su destino");
