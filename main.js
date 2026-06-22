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
  const elapsedMinutes = Math.max(0, (now - baseTime) / 60000);
  const estimatedConversion = Math.floor(basefarmlandconversion + (conversionRate * elapsedMinutes));
  
  document.getElementById("counter").textContent = estimatedConversion.toLocaleString();

}

setInterval(updateconversion, 1000);
updateconversion();



const globalCtx = document.getElementById("globalChart").getContext("2d");
new Chart(globalCtx, {
  type: "line",
  data: {
    labels: ["2025", "2026", "2027", "2028", "2029", "2030"],
    datasets: [{
      label: "Projected Population (Billion)",
      data: [8.2, 8.3, 8.4, 8.5, 8.6, 8.7],
      borderColor: "#00ff99",
      backgroundColor: "rgba(0, 255, 153, 0.15)",
      fill: true,
      tension: 0.3,
      pointBackgroundColor: "#00ff99"
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          color: "#00ff99"
        }
      },
      x: {
        ticks: {
          color: "#00ff99"
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: "#00ff99"
        }
      }
    }
  }
});