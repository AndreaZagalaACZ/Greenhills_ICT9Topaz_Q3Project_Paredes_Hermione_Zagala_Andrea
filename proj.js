const stations = [
"North Avenue",
"Quezon Avenue",
"Kamuning",
"Araneta Center-Cubao",
"Santolan-Annapolis",
"Ortigas",
"Shaw Boulevard",
"Boni",
"Guadalupe",
"Buendia",
"Ayala",
"Magallanes",
"Taft Avenue"
];

const basefare = 50;
const perKMrate = 15;
const baseKM = 2;

function compute_fare() {

let pickup = document.getElementById("plocations").selectedIndex;
let dropoff = document.getElementById("dlocations").selectedIndex;

let discount = Number(document.getElementById('discount').value);

let distance = Math.abs(dropoff - pickup);

let fare;

if (distance <= baseKM) {
    fare = basefare;
} else {
    fare = basefare + ((distance - baseKM) * perKMrate);
}

fare = fare - (fare * discount / 100);

document.getElementById("output").innerHTML =
"Distance: " + distance + " station(s) <br>" +
"Total Fare: Php " + fare.toFixed(2);

}
