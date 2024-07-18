// random number
let raceNumber = Math.floor(Math.random() * 1000);

// check early registration and age
const earlyRegistered = true;
const runner= 18;

// if older than 18 and check early registration
if (runner > 18 && earlyRegistered) {
  raceNumber += 1000;
}

// check age and provide start time
if (runner > 18 && earlyRegistered) {
  console.log(`Race starts at 9.30. Racenumber: ${raceNumber}`);
} else if (runner > 18 ){
  console.log(`Race starts at 11.00. Racenumber: ${raceNumber}`);
} else if (runner < 18) {
  console.log(`Race starts at 12.30. Racenumber: ${raceNumber}`);
} else {
  console.log('See registration deck.')
}
