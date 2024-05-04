const url = "data.json"; // Cambiar por la ruta correcta
let reservations = [];
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
    }, 3000);
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
          return `\nRoom Number: ${room.number} (${roomTypes.find((type) => type.id === room.type).name
            })`;
        })
        .join(", ")
    );
    // ... Continuar con la lógica de la app
  })
  .catch((error) => {
    console.error("Error al manejar la promesa:", error);
  });

while (true) {
  let options = prompt("Que deseas realizar? \n1) Realizar una reserva \n2) Ver reservas \n3) Cancelar reserva \n4) Modificar una reserva \n5) Salir");

  if (options === "1") {
    reservRoom();
  } else if (options === "2") {
    lookReserv();
  } else if (options === "3") {
    cancelReserv();
  } else if (options === "4") {
    editReserv()
    break;
  } else if (options === "5") {
    break;
  }
}

// Función para crear una reserva
function reservRoom() {
  const roomType = prompt("Ya viendo la consola, ingresa el tipo de habitacion que quieres (individual, doble, suite): ");
  const roomNumber = prompt("Ya viendo la consola, ingresa el numero de habitacion que quieres");
  const guestName = prompt("A nombre de quien estara la reserva?");
  const startDate = prompt("Ingresa la fecha de inicio de la reserva de la siguiente forma DD/MM/YYYY");
  const endDate = prompt("Ingresa la fecha final de la reserva de la siguiente forma DD/MM/YYYY");

  // Generador de ID único para cada reserva
  let reservationId = 1;
  function generateId() {
    return reservationId++;
  }

  const newReservation = {
    roomType,
    roomNumber,
    guestName,
    reservationId: generateId(),
    startDate,
    endDate,
  };
  reservations.push(newReservation);
  console.log("Reserva creada con éxito:", newReservation);
}

// Función para ver reservas
function lookReserv() {
  console.log("Reservas actuales:");
  reservations.forEach((reservation) => {
    console.log(`Reserva #${reservation.reservationId}: Habitación ${reservation.roomNumber}, Fecha de inicio: ${reservation.startDate}, Fecha de fin: ${reservation.endDate}`);
  });
}

function cancelReserv() {
  lookReserv();
  const reservationId = prompt("Ingrese el número de reserva que desea cancelar:");
  const index = reservations.findIndex((reservation) => reservation.reservationId === parseInt(reservationId));
  if (index !== -1) {
    reservations.splice(index, 1);
    console.log(`Reserva #${reservationId} cancelada con éxito.`);
  } else {
    console.log("No se encontró la reserva con ese número.");
  }
}

function editReserv() {
  lookReserv(); // Mostrar las reservas actuales
  const reservationId = prompt("Ingrese el número de reserva que desea editar:");
  const index = reservations.findIndex((reservation) => reservation.reservationId === parseInt(reservationId));
  if (index !== -1) {
    const editSomething = prompt("Ingrese el campo que desea editar (fecha, nombre, tipo, numero):");
    if (editSomething === "fecha") {
      const newStartDate = prompt("Ingresa la nueva fecha de inicio de la reserva de la siguiente forma DD/MM/YYYY");
      const newEndDate = prompt("Ingresa la nueva fecha final de la reserva de la siguiente forma DD/MM/YYYY");
      if (newStartDate && newEndDate) {
        reservations[index].startDate = newStartDate;
        reservations[index].endDate = newEndDate;
        console.log(`Reserva #${reservationId} editada con éxito.`);
      } else {
        console.log("Debes ingresar ambas fechas para editar la reserva.");
      }
    } else if (editSomething === "nombre") {
      const newGuestName = prompt("Ingresa el nuevo nombre del huésped:");
      if (newGuestName) {
        reservations[index].guestName = newGuestName;
        console.log(`Reserva #${reservationId} editada con éxito.`);
      } else {
        console.log("Debes ingresar un nombre para editar la reserva.");
      }
    } else if (editSomething === "tipo") {
      const roomTypes = ["individual", "doble", "suite"];
      const newRoomType = prompt("Ingresa el nuevo tipo de habitación: " + roomTypes.join(", "));
      if (roomTypes.includes(newRoomType)) {
        reservations[index].roomType = newRoomType;
        console.log(`Reserva #${reservationId} editada con éxito.`);
      } else {
        console.log("Tipo de habitación inválido. Los tipos de habitación válidos son: individual, doble, suite.");
      }
    } else if (editSomething === "numero") {
      const roomNumbers = reservations.map((reservation) => reservation.roomNumber);
      const newRoomNumber = prompt("Ingresa el nuevo número de habitación: " + roomNumbers.join(", "));
      if (roomNumbers.includes(newRoomNumber)) {
        reservations[index].roomNumber = newRoomNumber;
        console.log(`Reserva #${reservationId} editada con éxito.`);
      } else {
        console.log("Número de habitación inválido.");
      }
    } else {
      console.log("Campo inválido. Los campos válidos son: fecha, nombre, tipo, número.");
    }
  } else {
    console.log("No se encontró la reserva con ese número.");
  }
}