let answer1, answer2, answer3, answer4, answer5;
alert("OBSERVA CUIDADOSAMENTE EL SIGUIENTE CODIGO");
alert(`//vars call
console.log("Valor de a:", a);
console.log("Valor de b:", b);
console.log("Valor de c:", c);

//functions call
console.log("Resultado de funcionDeclarada:", funcionDeclarada());
console.log("Resultado de funcionExpresada:", funcionExpresada());

//vars declaration
var a = 1;
let b = 2;
const c = 3;

//functions declarations
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}

const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};`);

answer1 = prompt(
  "Con el codigo anterior que crees que pasara con el " +
    'console.log("Valor de a:", a);' +
    "\n1 - undefained \n2 - 1 \n3 - a"
);
if (answer1 == 1) {
  alert(
    "tu answeruesta: " +
      answer1 +
      "\nRespuesta correcta: Este console.log imprimira el valor de 'a' como 'undefained' debido a que las variables creadas con var se pueden acceder antes de su declaracion por ende imprimira 1\n\n" +
      'console.log("Valor de a:", a)'
  );
} else {
  alert(
    "tu answeruesta: " +
      answer1 +
      "\nRespuesta incorrecta: La respuesta correcta era 1 ya que este console.log imprimira el valor de 'a' como 'undefained' debido a que las variables creadas con var se pueden acceder antes de su declaracion por ende imprimira 1\n\n" +
      'console.log("Valor de a:", a)'
  );
}

answer2 = prompt(
  "Con el codigo anterior que crees que pasara con el " +
    'console.log("Valor de b:", b);' +
    "\n1 - 2 \n2 - b \n3 - ReferenceError: Cannot access 'b' before initialization"
);
if (answer2 == 3) {
  alert(
    "tu answeruesta: " +
      answer2 +
      "\nRespuesta correcta: Este console.log imprimira el valor de 'b' como 'ReferenceError: Cannot access 'b' before initialization' debido a que la variable creada con let no pueden acceder antes de que esta sea declarada\n\n" +
      'console.log("Valor de b:", b)'
  );
} else {
  alert(
    "tu answeruesta: " +
      answer2 +
      "\nRespuesta incorrecta: La respuesta correcta era la 3 ya que este console.log imprimira el valor de 'b' como 'ReferenceError: Cannot access 'b' before initialization' debido a que la variable creada con let no pueden acceder antes de que esta sea declarada\n\n" +
      'console.log("Valor de b:", b)'
  );
}

answer3 = prompt(
  "Con el codigo anterior que crees que pasara con el " +
    'console.log("Valor de c:", c)' +
    "\n1 - 3 \n2 - ReferenceError: Cannot access 'c' before initialization \n3 - c"
);
if (answer3 == 3) {
  alert(
    "tu answeruesta: " +
      answer3 +
      "\nRespuesta correcta: Este console.log imprimira el valor de 'c' como 'ReferenceError: Cannot access 'c' before initialization' debido a que la variable creada con let no pueden acceder antes de que esta sea declarada\n\n" +
      'console.log("Valor de c:", c)'
  );
} else {
  alert(
    "tu answeruesta: " +
      answer3 +
      "\nRespuesta incorrecta: La respuesta correcta era la 3 ya que este console.log imprimira el valor de 'c' como 'ReferenceError: Cannot access 'c' before initialization' debido a que la variable creada con let no pueden acceder antes de que esta sea declarada\n\n" +
      'console.log("Valor de c:", c)'
  );
}

answer4 = prompt(
  "Con el codigo anterior que crees que pasara con el " +
    'console.log("Resultado de funcionDeclarada:", funcionDeclarada())' +
    "\n1 - undefained \n2 - 1 \n3 - a"
);
if (answer4 == 1) {
  alert(
    "tu answeruesta: " +
      answer4 +
      "\nRespuesta correcta: Este console.log imprimira el valor de 'funcionDeclarada' como 'Resultado de funcionDeclarada: Función declarada ha sido llamada.' debido a que esta funcion es expresada\n\n" +
      'console.log("Valor de a:", a)'
  );
} else {
  alert(
    "tu answeruesta: " +
      answer4 +
      "\nRespuesta incorrecta: La respuesta correcta era 1 ya que este console.log imprimira el valor de 'funcionDeclarada' como 'Resultado de funcionDeclarada: Función declarada ha sido llamada.' debido a que \n\n" +
      'console.log("Valor de a:", a)'
  );
}
