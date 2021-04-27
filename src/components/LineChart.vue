<script>
import { Line, mixins } from 'vue-chartjs';

const reactiveProp = mixins;

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: {
    chartData: {
      type: Array || Object,
      required: false,
    },
    chartLabels: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      minBgVal: [],
      options: {
        scales: {
          yAxes: [{
            ticks: {
              min: 0,
              max: 24,
              stepSize: 4,
              beginAtZero: true,
            },
            gridLines: {
              display: false,
            },
          }],
          xAxes: [{
            type: 'time',
            time: {
              unit: 'hour',
            },
            gridLines: {
              display: false,
            },
          }],
        },
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    console.log('chartData: ', this.chartData);
    console.log('chartData: ', this.chartLabels);
    this.renderChart({
      labels: this.chartLabels,
      datasets: [
        {
          label: 'BG Data',
          pointBackgroundColor: '#000000',
          pointRadius: 2,
          showLine: false,
          data: this.chartData,
        },
        {
          borderColor: '#000000',
          borderWidth: 0.5,
          fill: true,
          pointRadius: 0,
          showLine: true,
          data: Array(this.chartData.length).fill(4),
        },
        {
          borderColor: '#000000',
          borderWidth: 0.5,
          fill: false,
          pointRadius: 0,
          showLine: true,
          data: Array(this.chartData.length).fill(10),
        },
      ],
    }, this.options);
  },
};
</script>
