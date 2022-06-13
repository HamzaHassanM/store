// chartjs chart
Chart.defaults.global = {
    animation: true,
    animationSteps: 60,
    animationEasing: "easeOutIn",
    showScale: true,
    scaleOverride: false,
    scaleSteps: null,
    scaleStepWidth: null,
    scaleStartValue: null,
    scaleLineColor: "#eeeeee",
    scaleLineWidth: 1,
    scaleShowLabels: true,
    scaleLabel: "<%=value%>",
    scaleIntegersOnly: true,
    scaleBeginAtZero: false,
    scaleFontSize: 12,
    scaleFontStyle: "normal",
    scaleFontColor: "#717171",
    responsive: true,
    maintainAspectRatio: true,
    showTooltips: true,
    multiTooltipTemplate: "<%= value %>",
    tooltipFillColor: "#333333",
    tooltipEvents: ["mousemove", "touchstart", "touchmove"],
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
    tooltipFontSize: 14,
    tooltipFontStyle: "normal",
    tooltipFontColor: "#fff",
    tooltipTitleFontSize: 16,
    TitleFontStyle: "Raleway",
    tooltipTitleFontStyle: "bold",
    tooltipTitleFontColor: "#ffffff",
    tooltipYPadding: 10,
    tooltipXPadding: 10,
    tooltipCaretSize: 8,
    tooltipCornerRadius: 6,
    tooltipXOffset: 5,
    onAnimationProgress: function () {},
    onAnimationComplete: function () {}
};
var lineGraphData = {
    labels: ["1 min.", "10 min.", "20 min.", "30 min.", "40 min.", "50 min."],
    datasets: [{
        label: "My First dataset",
        fillColor: "transparent",
        strokeColor: "#02cccd",
        pointColor: "#02cccd",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "#000",
        data: [10, 50, 0, 80, 10, 70]
    }, {
        label: "My Second dataset",
        fillColor: "transparent",
        strokeColor: "#a5a5a5",
        pointColor: "#a5a5a5",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#000",
        pointHighlightStroke: "rgba(30, 166, 236, 1)",
        data: [20, 40, 15, 70, 30, 27]
    }, {
        label: "My third dataset",
        fillColor: "transparent",
        strokeColor: "#ff4c3b",
        pointColor: "#ff4c3b",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#000",
        pointHighlightStroke: "rgba(30, 166, 236, 1)",
        data: [5, 30, 20, 40, 50, 20]
    }]
};
var lineGraphOptions = {
    scaleShowGridLines: true,
    scaleGridLineColor: "rgba(0,0,0,.05)",
    scaleGridLineWidth: 1,
    scaleShowHorizontalLines: true,
    scaleShowVerticalLines: true,
    bezierCurve: true,
    bezierCurveTension: 0.4,
    pointDot: true,
    pointDotRadius: 4,
    pointDotStrokeWidth: 1,
    pointHitDetectionRadius: 20,
    datasetStroke: true,
    datasetStrokeWidth: 2,
    datasetFill: true,
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
};
var lineCtx = document.getElementById("myGraph").getContext("2d");
var myLineCharts = new Chart(lineCtx).Line(lineGraphData, lineGraphOptions);


//chartist chart
new Chartist.Line('.ct-4', {
    labels: [1, 2, 3, 4, 5, 6, 7],
    series: [
        [3, 4, 3, 5, 4, 3, 5]
    ]
}, {
    low: 0,
    offset: 0,
    fullWidth: !0,
    showArea: !0,
    chartPadding: {
        right: 0,
        left: 0,
        bottom: 0
    },
    axisY: {
        low: 0,
        showGrid: false,
        showLabel: false,
        offset: 0
    },
    axisX: {
        showGrid: false,
        showLabel: false,
        offset: 0
    }
});


//sales-purchase chart
new Chartist.Bar('.sales-chart', {
    labels: ['100', '200', '300', '400', '500', '600', '700', '800'],
    series: [
        [2.5, 3, 3, 0.9, 1.3, 1.8, 3.8, 1.5],
        [3.8, 1.8, 4.3, 2.3, 3.6, 2.8, 2.8, 2.8]
    ]
}, {
    seriesBarDistance: 2,
    chartPadding: {
        left: 0,
        right: 0,
        bottom: 0,
    },
    axisX: {
        showGrid: false,
        labelInterpolationFnc: function (value) {
            return value[0];
        }
    }
}, [
    ['screen and (min-width: 300px)', {
        seriesBarDistance: 15,
        axisX: {
            labelInterpolationFnc: function (value) {
                return value.slice(0, 3);
            }
        }
    }],
    ['screen and (min-width: 600px)', {
        seriesBarDistance: 12,
        axisX: {
            labelInterpolationFnc: Chartist.noop
        }
    }]
]);

// sales & purchase return
var myLineChart = {
    labels: ["", "10", "20", "30", "40", "50", "60", "70", "80"],
    datasets: [{
        fillColor: "transparent",
        strokeColor: "#ff4c3b",
        pointColor: "#ff4c3b",
        data: [20, 40, 20, 50, 20, 60, 10, 40, 20]
    }, {
        fillColor: "transparent",
        strokeColor: "#a5a5a5",
        pointColor: "#a5a5a5",
        data: [60, 10, 40, 30, 80, 30, 20, 90, 0]
    }]
}
var ctx = document.getElementById("myLineCharts").getContext("2d");
var LineChartDemo = new Chart(ctx).Line(myLineChart, {
    pointDotRadius: 2,
    pointDotStrokeWidth: 5,
    pointDotStrokeColor: "#ffffff",
    bezierCurve: false,
    scaleShowVerticalLines: false,
    scaleGridLineColor: "#eeeeee"
});

// expense
google.charts.load('current', {
    packages: ['corechart', 'bar']
});
google.charts.load('current', {
    'packages': ['line']
});
google.charts.load('current', {
    'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {
    if ($("#area-chart1").length > 0) {
        var data = google.visualization.arrayToDataTable([
            ['Year', 'Sales', 'Expenses'],
            ['2013', 1000, 400],
            ['2014', 1170, 460],
            ['2015', 660, 1120],
            ['2016', 1030, 540]
        ]);
        var options = {
            title: 'Company Performance',
            hAxis: {
                title: 'Year',
                titleTextStyle: {
                    color: '#333'
                }
            },
            vAxis: {
                minValue: 0
            },
            width: '100%',
            colors: ["#ff4c3b", "#a5a5a5"]
        };
        var chart = new google.visualization.AreaChart(document.getElementById('area-chart1'));
        chart.draw(data, options);
    }
}