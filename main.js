// Computing the fare cost
function compute_fare() {
    let base = Number(document.getElementById('base').value);
    let discount = Number(document.getElementById('discount').value);
    let fare = base - (base * discount / 100);

document.getElementById('output').innerHTML = 'Amount to pay: Php ' + fare;

}
