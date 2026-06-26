/*
This is based on the Population Tracker created by @ ryven-gg on Github linked here: https://github.com/ryven-gg/Population-Tracker/tree/main
*/

// set time that this counter starts from. chose end of 2016
const baseTime = new Date("2016-12-31T00:00:00Z").getTime();

// base value of farmland converted at 2016
const basefarmlandconversion = 10932493.6437403;

// rate at which farmland is converted / minute
const conversionRate = 1.386668397;

// definining function to update 2016 value based on time elapsed
function updateconversion() {
  const now = Date.now();
  const elapsedMinutes = (now - baseTime) / 60000;
  // const estimatedConversion = Math.floor(basefarmlandconversion + (conversionRate * elapsedMinutes));
  const estimatedConversion = (basefarmlandconversion + (conversionRate * elapsedMinutes)).toFixed(1);

  document.getElementById("counter").textContent = estimatedConversion.toLocaleString();

}

setInterval(updateconversion, 1000);
updateconversion();
