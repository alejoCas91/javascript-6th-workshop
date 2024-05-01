const intervalo = parseInt(prompt("Ingrese un intervalo en segundos:"));
const promesa = new Promise((resolve) => {
    setTimeout(() => {
        resolve(`Se han transcurrido ${intervalo} segundos.`);
    }, intervalo * 1000);
});
promesa.then((mensaje) => {
    console.log(mensaje);
}).catch((error) => {
    console.error("Error:", error);
});
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log("Datos cargados:", data);
    })
    .catch((error) => {
        console.error("Error al cargar datos:", error);
    });