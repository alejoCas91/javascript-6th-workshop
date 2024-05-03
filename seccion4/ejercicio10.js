```javascript
console.log("Inicio del script");

// Macrotarea: setTimeout
setTimeout(() => {
  console.log("Macrotarea 1 second (setTimeout)");
}, 1000);

setTimeout(() => {
  console.log("Macrotarea 0 seconds (setTimeout)");
}, 0);

// Microtarea: Promesa
Promise.resolve()
  .then(() => {
    setTimeout(() => {
      console.log("Macrotarea (setTimeout) inside Microtarea 1");
      return "from micro 1";
    }, 0);
  })
  .then((message) => {
    console.log("Microtarea 2 (Promesa)");
  });

// Microtarea: Promesa
Promise.resolve()
  .then(() => {
    console.log("Microtarea 3 (Promesa)");
  })
  .then(() => {
    console.log("Microtarea 4 (Promesa)");
  });

console.log("Fin del script");
    ```


   /* - ¿Qué tareas se consideran macrotareas y cuáles son microtareas?
    RESP// En el codigo se consideran macrotareas las API setTimeout, creeria que es porque tienen un tiempo de espera mayor y llevas un proceso más largo para ser ejecutado, las micro tareas se podría decir que son las promesas, (.then / catch / finally) ya que estas toman menos tiempo analizarlas.
    */
   /* - ¿Cómo se relacionan las macrotareas y microtareas con el event loop?
    RESP//  se pueden relacionar por el recorrido que hace, analiza las macro y las micro, las separa y vuelve a hacer el recorrido para observar cuál se ejecuta primero, cuando se ejecuta de nuevo se hace el recorrido y asi hasta que se resuelva todo el codigo.
    */
   /* - ¿Qué sucede cuando una microtarea genera una nueva macrotarea dentro de ella?
    RESP// cuando una micro tarea hace una macro tarea, en el caso de este codigo analicé que está primero la macro que la micro, y solo analiza la macro y sale de la funcion, ya despues de volver a hacer el recorrido si analiza la micro, asi que diría que lo que sucede es que la macro tiene prioridad en ser leída y ya esta leída puede seguir la micro
    */
   /* - ¿Cómo se manejan las promesas y los setTimeout en relación con el event loop?
    RESP//las promesas y el setTimeout son muy similares ya que siguen y respetan el orden para hacer el console.log, ejemplo con el codigo, con los setTimeout primero se ejecuta la que tiene 0 segundos, ya que fue la primera que analizó y es más rápida de ejecutar, despues le sigue la que está dentro de la microtarea ya que tambien tiene 0 segundos y por ultima la de 1 segundo, lo mismo pasa con las promesas, se va haciendo una por una viendo cuál está primero, en el codigo aparece 3, 2, 4 porque la 2 está siendo obstruida por la macrotarea.
   */
  