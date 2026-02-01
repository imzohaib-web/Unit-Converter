// 1 meter = 3.28084 feet
// 1 liter = 0.264172 gallon
// 1 kilo = 2.20462 pound

const inputEl = document.getElementById('input-value');
const convertBtn = document.getElementById('convert-btn');
const lengthResult = document.getElementById('length-result');
const volumeResult = document.getElementById('volume-result');
const massResult = document.getElementById('mass-result');

convertBtn.addEventListener('click', function () {
    const value = Number(inputEl.value);

    if (!value) return;
    if (value < 0) return;

    lengthConversion(value);
    volumeConversion(value);
    massConversion(value);
});
inputEl.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        convertBtn.click();
    }
});



function lengthConversion(value) {
    const meterToFeet = value * 3.28084;
    const feetToMeter = value * 0.3048;

    lengthResult.textContent = `${value} meters = ${meterToFeet.toFixed(3)} feet | ${value} feet = ${feetToMeter.toFixed(3)} meters`;
}

function volumeConversion(value) {
    const litersToGallons = value * 0.264172;
    const gallonsToLiters = value * 3.78541;

    volumeResult.textContent = `${value} liters = ${litersToGallons.toFixed(3)} gallons | ${value} gallons = ${gallonsToLiters.toFixed(3)} liters`;
}

function massConversion(value) {
    const kilosToPounds = value * 2.20462;
    const poundsToKilos = value * 0.453592;

    massResult.textContent = `${value} kilos = ${kilosToPounds.toFixed(3)} pounds | ${value} pounds = ${poundsToKilos.toFixed(3)} kilos`;
}
