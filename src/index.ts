/* Estructura de Control -
Selección
Ejercicio – Par/Impar
• Desarrollar un algoritmo que dado un número,
ingresado por el usuario determine si el
número es par o impar y le informe al usuario
• En el caso de ser 0 (cero) el algoritmo deberá
informarlo
Recuerde  */

let numero: number = Number(prompt("ingrese un numero entero"));

while (numero === 0) {
  numero = Number(alert("el numero que se ha ingresado es: 0"));
  numero = Number(prompt(" ingrese numero nuevamente"));
}
if (numero % 2 === 0) {
  console.log("el número es PAR");
} else {
  console.log("el número es IMPAR");
}
