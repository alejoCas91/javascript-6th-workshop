function manejarAsincronia(callback, promesa) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        reject("Error de conexión");
      } else {
        resolve("Conexión establecida");
      }
    }, 2000);
  });
}
