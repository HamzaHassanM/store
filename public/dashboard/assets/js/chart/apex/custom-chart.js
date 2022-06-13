// total sale
var options = {
  chart: {
    type: 'area',
    height: 250,
    zoom: {
      enabled: false
    },
    toolbar: {
      show: true
    },
  },
  dataLabels: {
    enabled: false
  },
  series: [{
      data: [
        [1351202400000, 37.30],
        [1351638000000, 37.60],
        [1351724400000, 37.50],
        [1351810800000, 37.55],
        [1352070000000, 37.40],
        [1352256400000, 37.55],
        [1352342800000, 37.45],
        [1352429200000, 37.60],
        [1352515600000, 37.50],
        [1352624000000, 37.30],
        [1352761200000, 37.20],
        [1353134000000, 37.25],
        [1353220400000, 37.22],
        [1353279600000, 37.30],
        [1353466000000, 37.23],
        [1353632400000, 37.30],
        [1353757200000, 37.28],
        [1353857200000, 37.30],
        [1353957200000, 37.28],
        [1354021500000, 37.10],
        [1354175600000, 37.28],
        [1354262000000, 37.22],
        [1354748400000, 37.50],
        [1354834800000, 37.55],
        [1354894000000, 37.65],
        [1355080400000, 37.50],
        [1355166800000, 37.40],
        [1355353200000, 37.50],
        [1355439600000, 37.45],
        [1355698800000, 37.51],
        [1355785200000, 37.40],
      ]
    },

  ],
  markers: {
    size: 0,
    style: 'hollow',
  },
  grid: {
    borderColor: 'transparent'
  },
  xaxis: {
    type: 'datetime',
    tickAmount: 6,
    low: 0,
    offsetX: 0,
    offsetY: 0
  },
  yaxis: {
    opposite: true,
    low: 0,
    offsetX: 0,
    offsetY: 0
  },
  stroke: {
    width: [2]
  },
  title: {
    text: 'Total Revenue',
    align: 'left'
  },
  subtitle: {
    text: 'Price Movements',
    align: 'left'
  },
  tooltip: {
    x: {
      format: 'dd MMM yyyy'
    }
  },
  colors: ['#ff4c3b'],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.6,
      opacityTo: 0.5,
      stops: [0, 100]
    }
  },

}

var chart = new ApexCharts(
  document.querySelector("#chart"),
  options
);

chart.render();


// orders

var options = {
  series: [20, 25, 55],
  chart: {
    type: 'donut',
    height: 250,
  },
  dataLabels: {
    enabled: false
  },
  title: {
    text: "Overall Sales"
  },
  labels: ['Recent Order', 'Panding Payments', 'Recived Payments'],
  colors: ['#f7bfc1', '#c8c8c8', '#ff8181'],
  responsive: [{
    breakpoint: 1430,
    options: {
      chart: {
        width: 280,
        height: 285
      },
      legend: {
        position: 'bottom'
      }
    },
    breakpoint: 1199,
    options: {
      chart: {
        width: 250,
        height: 290
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

var chart = new ApexCharts(document.querySelector("#chart-order"), options);
chart.render();