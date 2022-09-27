const apiTransactionsURL = "http://localhost:3344/transactions";
const apiUnitsURL = "api/units";
const apiResidentsURL = "http://localhost:3344/residents";

// kirim request ke backend (data guests dari backend)
// fetch fungsi bawaan js browser utk merequest ke server
// frontend : backend == client : server == request : response
export async function getAllTransactions() {
  const response = await fetch(apiTransactionsURL);

  return response.json();
}

export async function getAllUnits() {
  const response = await fetch(apiUnitsURL);

  return response.json();
}

export async function getAllResidents() {
  const response = await fetch(apiResidentsURL);

  return response.json();
}

// export async function createGuest(guest) {
//   const response = await fetch(apiGuestURL, {
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     method: "POST",
//     body: JSON.stringify(guest),
//   });
//   //console.log("GUESTS API:", response.json);
//   return response.json();
// }

// export async function updateGuest(guest) {
//   const response = await fetch(`${apiGuestURL}/${guest.id}`, {
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     method: "PUT",
//     body: JSON.stringify(guest),
//   });

//   return response.json();
// }

// export async function deleteGuest(guest) {
//   const response = await fetch(`${apiGuestURL}/${guest}`, {
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     method: "DELETE",
//   });

//   return response.json();
// }
