function crearContador() {
    let contador = 0;

    return {
        incrementar: () => contador++,
        obtenerValor: () => contador,
    };
}
const contador = crearContador();
while (true) {
    const opcion = prompt("Elige una opción: \n1) incrementar \n2) ver \n3) salir");

    if (opcion === "1") {
        contador.incrementar();
    } else if (opcion === "2") {
        alert(`El valor actual del contador es: ${contador.obtenerValor()}`);
    } else if (opcion === "3") {
        break;
    } else {
        alert("Opción inválida, por favor elige una opción válida.");
    }
}