const xValues = [2016, 2017, 2018, 2019,2020,2021,2022];
const yValues = [0,20,40,60,80,100];
const barColors = ["#009CFF" , "#009CFF90", "#009CFF99","#0dcaf0","#009CFF30","#009CFF76","#009CFF76"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {}
});
 new Chart("myCharts", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false // Hide legend for simplicity
          }
        },
        scales: {
          y: {
            beginAtZero: true // Y-axis starts at 0
          }
        }
      }
    });
// ----------------------------------
  