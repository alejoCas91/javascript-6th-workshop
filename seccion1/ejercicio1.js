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

let choose = prompt(
  "Cuál scope quieres ver? \n1 = global \n2 = function \n3 = block"
);
switch (choose) {
  case "1":
    globalScope();
    break;
  case "2":
    functionScope();
  case "3":
    blockScope();
}
function globalScope() {
  const acceder = prompt(
    "A cuál variable puedes acceder de manera global? \n1 = global \n2 = funcion \n3 = bloque"
  );
  if (acceder == 1) {
    alert(
      "Así es, puedes acceder a la variable global en desde cualquier parte del codigo, ya que esta misma está en el top del codigo y afuera de funciones"
    );
  } else {
    alert(
      "Incorrecto, las variables de bloque y funcion no se pueden acceder porque están fuera de la funcion en la que fueron declaradas, solo pueden ser llamadas dentro de aquella funcion"
    );
  }
}
function functionScope() {
  const acceder = prompt(
    "A cuáles variables puedes acceder de manera global? \n1 = global \n2 = funcion \n3 = bloque"
  );
  if ((acceder == 1) | 2) {
    alert(
      "Así es, el scope local o function scope tiene acceso a el scope global y el mismo, osea al scope local"
    );
  } else {
    alert("Incorrecto, el scope local no puede acceder a el scope en bloque");
  }
}
function blockScope() {
  const acceder = prompt(
    "A cuál variable puedes acceder de manera block? \n1 = global \n2 = funcion \n3 = bloque \n4 = todas"
  );
  if (acceder == 4) {
    alert(
      "Así es, las variables en bloque pueden acceder al scope global y al scope de la function"
    );
  } else {
    alert(
      "correcto e incorrecto, el scope en bloque puede acceder a todos los scopes"
    );
  }
}
