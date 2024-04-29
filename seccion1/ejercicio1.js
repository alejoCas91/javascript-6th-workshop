// Global Scope
var globalVariable = "Soy una variable global.";

function testScope() {
  // Function Scope
  var functionVariable = "Soy una variable local.";

  if (true) {
    // Block Scope
    let blockVariable = "Soy una variable de bloque.";
    console.log("Dentro del bloque:", blockVariable);
  }

  console.log("Dentro de la función:", functionVariable);
}

console.log("Fuera de la función:", globalVariable);
testScope();

const acceder = prompt("A cuál variable puedes acceder? \n1 = global \n2 = funcion \n3 = bloque")
if (acceder == 1) {
  alert("así es, puedes acceder a la variable global en desde cualquier parte del codigo, ya que esta misma está en el top del codigo y afuera de funciones");
} else{
    alert("Incorrecto, las variables de bloque y funcion no se pueden acceder porque están fuera de la funcion en la que fueron declaradas, solo pueden ser llamadas dentro de aquella funcion")
}


// console.log(blockVariable); //no se puede acceder porque está fuera de la funcion/bloque
// console.log(functionVariable); //no se puede acceder porque está fuera de la funcion/bloque