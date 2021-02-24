const guestOne = {
  fullName: "Jodie Manopo",
  occupation: "Musician", // art
};

const guestTwo = {
  fullName: "Litha Octa",
  occupation: "Businesswoman", // business
};

function receptionist(guest, callback) {
  guest.occupation === "Musician"
    ? callback(guest.fullName, "Aula A")
    : callback(guest.fullName, "Aula B");
}

const bellBoy = (guestName, location) => {
  console.log(`Selamat Datang ${guestName}`);
  location === "Aula A"
    ? console.log(`Silahkan manggung di ${location}`)
    : console.log(`Meeting anda akan segera dimulai di ${location}`);
};

const bellGirl = (guestName, location) => {
  console.log(`Selamat Datang ${guestName} di lokasi`);
  location === "Aula A"
    ? console.log(`Semoga sukses performance nya di ${location}`)
    : console.log(`Harap segera untuk menghadiri meeting di ${location}`);
};

receptionist(guestOne, bellBoy);
console.log("-".repeat(50));
receptionist(guestTwo, bellBoy);
console.log("-".repeat(50));
receptionist(guestOne, bellGirl);
console.log("-".repeat(50));
receptionist(guestTwo, bellGirl);
