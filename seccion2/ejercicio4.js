console.log("Intentando llamar a 'funcionDeclarada' antes de su declaración:");
try {
  console.log(funcionDeclarada());
} catch (error) {
  console.log("Error:", error.message);
}

console.log("Intentando llamar a 'funcionExpresada' antes de su declaración:");
try {
  console.log(funcionExpresada());
} catch (error) {
  console.log("Error:", error.message);
}

// Declaración de una función declarada
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}

// Declaración de una función expresada
const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};

console.log("Llamando a 'funcionDeclarada' después de su declaración:");
console.log(funcionDeclarada());

console.log("Llamando a 'funcionExpresada' después de su declaración:");
console.log(funcionExpresada());

/*¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?
RESP/ al llamar las funciones antes de su declaracion las funciones declaradas pudieron ser llamadas sin problema mientras que las funciones expresadas no pudieron ser llamadas y se producia un error*/

/*¿Cómo difieren los resultados entre la función declarada y la función expresada?
RESP/ porque la declarada puede ser llamada desde cualquier parte del codigo y la expresada despues de haber sido creada*/

/*¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones?
RESP/ JavaScript al iniciar supongo que pone como prioridad la funcion declarada antes que la expresada,
como se sabe la expresada tiene que estar inciada por una expresion y pienso que eso la atrasa y debe de estar
el codigo abajo de esta misma*/
