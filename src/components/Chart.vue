<template>
  <canvas ref="myChart" class="myChart"></canvas>
</template>

<script>
import Chart from "chart.js";
export default {
  props: {
    type: {
      type: String,
    },
    data: {
      type: Object,
    },
    options: {
      type: Object,
    },
  },
  created() {},
  mounted() {
    const ctx = this.$refs.myChart.getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
        ],
        datasets: [
          {
            data: [1, 2, 5, 4, 0, 3, 3, 3, 5, 0],
            backgroundColor: ["rgba(0,0,0, 0.1)"],
            borderColor: ["rgba(0,0,0, 1)"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        elements: {
          point: {
            radius: 0,
          },
        },
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                zeroLineBorderDashOffset: 0.0,
                display: true,
                color: "rgba(0,0,0, 0.2)",
                zeroLineWidth: 2,
                zeroLineColor: "rgba(0,0,0, 1)",
              },
              ticks: {
                reverse: true,
                beginAtZero: true,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: "rgba(0,0,0, 0.2)",
                zeroLineWidth: 2,
                zeroLineColor: "rgba(0,0,0, 1)",
              },
              ticks: {
                beginAtZero: true,
                display: false,
                drawticks: false,
              },
            },
          ],
        },
        tooltips: {
          enabled: false,
        },
      },
    });
  },
};
</script>

<style lang="scss">
.myChart {
  width: auto;
  height: auto;
}
</style>
