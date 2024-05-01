alert("ANALIZA EL SIGUIENTE CODIGO")
alert(```
console.log("Inicio del script");

setTimeout(() => {
  console.log("Primer setTimeout");
}, 0);

setTimeout(() => {
  console.log("Segundo setTimeout");
}, 0);

Promise.resolve("Promesa resuelta").then(console.log);

console.log("Fin del script");
```)

const userInput = prompt("Ingrese el orden en que se mostrarán los mensajes (separados por comas):");
console.log("Inicio del script");
setTimeout(() => {
    console.log("Primer setTimeout");
}, 0);

setTimeout(() => {
    console.log("Segundo setTimeout");
}, 0);

Promise.resolve("Promesa resuelta").then(console.log);

console.log("Fin del script");

const realOutput = [
    "Inicio del script",
    "Fin del script",
    "Promesa resuelta",
    "Primer setTimeout",
    "Segundo setTimeout",
].join(", ");
const userInputArray = userInput.split(",");
const errors = [];

for (let i = 0; i < userInputArray.length; i++) {
    if (userInputArray[i].trim() !== realOutput.split(", ")[i]) {
        errors.push(`Error en el paso ${i + 1}: esperaba "${realOutput.split(", ")[i]}" pero se obtuvo "${userInputArray[i].trim()}"`);
    }
}

if (errors.length === 0) {
    console.log("¡Felicidades! Predijo correctamente el orden.");
} else if (errors.length === 1) {
    console.log(`Error: ${errors[0]}`);
} else {
    console.log("Error: hubo varios errores en la predicción.");
    console.log(errors.join("\n"));
}