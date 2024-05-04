const url = "data.json"; // Cambiar por la ruta correcta
let reservations = []

// Función para cargar y mostrar el contenido de data.json
function cargarYMostrarData() {
  // Retorna una nueva promesa que se resuelve después del setTimeout
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Realiza la solicitud fetch dentro del setTimeout
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al cargar los datos.");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Habitaciones:", data.rooms);
          console.log("Tipos de Habitaciones:", data.roomTypes);
          resolve(data); // Resuelve la promesa con los datos cargados
        })
        .catch((error) => {
          console.error(error);
          reject(error); // Rechaza la promesa si hay un error
        });
    }, 4000);
  });
}

// Llamar a la función para cargar y mostrar el contenido de data.json
cargarYMostrarData()
  .then(({ rooms, roomTypes }) => {
    // Mostrar el contenido de las habitaciones después de cargar los datos
    const userInput = prompt(
      "Ingrese el numero de habitacion a reservar: " +
        rooms
          .map((room) => {
            return `\nRoom Number: ${room.number} (${
              roomTypes.find((type) => type.id === room.type).name
            })`;
          })
          .join(", ")
    );
    // ... Continuar con la lógica de la app
  

  })
  .catch((error) => {
    console.error("Error al manejar la promesa:", error);
  });
  
  let options = prompt("Que deseas realizar? \n1) Realizar una reserva \n2) ver reservas")

  while (true) {
    if (options == "1"){
      reservRoom()
      break;
    }
    else if ( options == "2"){
      lookReserv()
      break;
    }
  }

  function reservRoom(){
  let resRoomType = prompt("Ya viendo la consola, ingresa el tipo de habitacion que quieres (individual, doble, suite): ")
  let resRoom = prompt("Ya viendo la consola, ingresa el tipo de habitacion que quieres")
  let resName = prompt("A nombre de quien estara la reserva?")
  let resDateStart = prompt("Ingresa la fecha de inicio de la reserva de la siguiente forma DD/MM/YYYY")
  let resDateEnd = prompt("Ingresa la fecha final de la reserva de la siguiente forma DD/MM/YYYY")
    function generarGeneradorId() {
      let id = 1; // Variable id se inicializa fuera de la función interna
  
      return function () {
        return id++; // Cada vez que se llama a la función, se incrementa id y se devuelve
      };
    }
  const pushRes = {
    RoomType: resRoomType,
    Room: resRoom,
    resName: resName,
    RoomId: generarGeneradorId,
    resDateStart: resDateStart,
    resDateEnd: resDateEnd,
  };
  reservations.push(pushRes)
}

function lookReserv(){
  console.log(reservations);
}