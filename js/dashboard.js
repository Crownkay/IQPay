// MAIN JAVASCRIPT

// Sidebar Toggle
$('.sidebar-collapse').on('click', () => {
  document.querySelector('.admin-nav').classList.toggle('admin-nav-open')
  document.querySelector('#sb-toggler').classList.toggle('sidebar-active')
})


// Charts

const chart1 = document.querySelector('#agent-chart1')
const chart2 = document.querySelector('#agent-chart2')
const txPiechart = document.querySelector('#transaction-chart')

// Bar Chart
var barchartDataPoints = [
  {
    name: 'Transaction',
    data: [11, 25, 30, 49, 65, 70, 77, 86.2]
  }
]
var barchartDataObj = {
  chart: {
    type: 'area'
  },
  title: {
    useHTML: true,
    text: `
      <b>Last Week's Transactions</b>
      <b><i class="fa fa-check-circle"></i> +26%</b>
    `,
    // margin: 20,
    widthAdjust: 0
  },

  yAxis: {
    title: {
      text: false
    },
    gridLineWidth: 0
  },

  xAxis: {
    gridLineWidth: false
  },

  legend: {
    enabled: false
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 3
    }
  },

  series: barchartDataPoints
}

// Load Barchart
Highcharts.chart(chart1, barchartDataObj)


// Pie Chart
var piechartDataPoints = [
  { y: 26, name: "School Aid" },
  { y: 20, name: "Medical Aid" },
  { y: 5, name: "Debt" }
]
var pieChartDataObj = {
  exportEnabled: false,
  animationEnabled: true,
  title:{
    text: undefined
  },
  legend:{
    cursor: "pointer"
  },
  data: [
    {
      type: "pie",
      showInLegend: false,
      toolTipContent: "{name}: <strong>{y}%</strong>",
      indexLabel: "{name} - {y}%",
      dataPoints: piechartDataPoints
    }
  ]
}

window.onload = function () {
  new CanvasJS.Chart(txPiechart, pieChartDataObj).render();
}
