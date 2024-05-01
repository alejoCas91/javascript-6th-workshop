function manejarAsincronia(callback) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promesa resuelta");
    }, 2000);
  });
  promise.then((result) => {
    callback(result);
  });
}
manejarAsincronia((result) => {
  console.log(`¡Promesa cumplida y callback ejecutado! ${result}`);
});

/* -¿Qué sucede si cambias el tiempo de resolución de la promesa a 5 segundos o a 1 segundo ?
Si cambiamos el tiempo de resolución de la promesa, el callback se ejecutará después de ese tiempo. Por ejemplo, si cambiamos el tiempo a 5 segundos, el callback se ejecutará después de 5 segundos. Si cambiamos el tiempo a 1 segundo, el callback se ejecutará después de 1 segundo.
*/
/*¿Cómo se comporta la función si la promesa es rechazada en lugar de resuelta ?
Si la promesa es rechazada en lugar de resuelta, el callback no se ejecutará. En este caso, debemos agregar un bloque catch para manejar el rechazo de la promesa.  
*/
/*
¿Puedes modificar la función para que el callback maneje diferentes tipos de información dependiendo del resultado de la promesa ?
Segun lo que investigué sí, ya que a veces necesitamos que el callback maneje diferentes casos de éxito o fallo de la promesa.
*/