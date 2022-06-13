//market-chart
new Chartist.Bar('.market-chart', {
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
var pieData = [{
        value: 300,
        color: "#ab8ce4",
        highlight: "#ab8ce4",
        label: "Primary"
    },
    {
        value: 50,
        color: "#26c6da",
        highlight: "#26c6da",
        label: "Secondary"
    },
    {
        value: 100,
        color: "#FF5370",
        highlight: "#FF5370",
        label: "Danger"
    }
];
var pieOptions = {
    segmentShowStroke: true,
    segmentStrokeColor: "#fff",
    segmentStrokeWidth: 2,
    percentageInnerCutout: 0,
    animationSteps: 100,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
};


var doughnutData = [{
        value: 300,
        color: "#ff4c3b",
        highlight: "#ff4c3b",
        label: "Saint Lucia"
    },
    {
        value: 50,
        color: "#02cccd",
        highlight: "#02cccd",
        label: "Kenya"
    },
    {
        value: 100,
        color: "#a5a5a5",
        highlight: "#a5a5a5",
        label: "Liberia"
    }
];
var doughnutOptions = {
    segmentShowStroke: true,
    segmentStrokeColor: "#fff",
    segmentStrokeWidth: 2,
    percentageInnerCutout: 50,
    animationSteps: 100,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
};
var doughnutCtx = document.getElementById("myDoughnutGraph").getContext("2d");
var myDoughnutChart = new Chart(doughnutCtx).Doughnut(doughnutData, doughnutOptions);

$(".pie-colours-1").peity("pie", {
    fill: ["#ff4c3b", "#02cccd", "#ffbc58", "#a5a5a5"],
    width: '250',
    height: '180'
})

// chartist chart
new Chartist.Line('.ct-4', {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [
        [5, 9, 7, 8, 5, 3, 5, 4]
    ]
}, {
    low: 0,
    showArea: true
});

// buy sell chart
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
        data: [20, 5, 80, 10, 100, 15]
    }, {
        label: "My Second dataset",
        fillColor: "transparent",
        strokeColor: "#a5a5a5",
        pointColor: "#a5a5a5",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#000",
        pointHighlightStroke: "rgba(30, 166, 236, 1)",
        data: [0, 50, 20, 70, 30, 27]
    }, {
        label: "My third dataset",
        fillColor: "transparent",
        strokeColor: "#ff4c3b",
        pointColor: "#ff4c3b",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#000",
        pointHighlightStroke: "rgba(30, 166, 236, 1)",
        data: [0, 30, 40, 10, 86, 40]
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


// sparkline

var sparkline_chart = {
    init: function () {
        setTimeout(function () {
            $("#simple-line-chart-sparkline").sparkline([85, 83, 90, 70, 85, 60, 65, 63, 68, 68, 65, 40, 60, 68, 75, 70, 90], {
                type: 'line',
                width: '100%',
                height: '100%',
                tooltipClassname: 'chart-sparkline',
                lineColor: '#02cccd',
                fillColor: 'transparent',
                highlightLineColor: "#02cccd",
                highlightSpotColor: false,
                targetColor: "#02cccd",
                performanceColor: "#02cccd",
                boxFillColor: "#02cccd",
                medianColor: "#02cccd",
                minSpotColor: false,
                maxSpotColor: false,
                spotColor: false
            });
            $("#simple-line-chart-sparkline-1").sparkline([85, 83, 90, 70, 85, 60, 65, 63, 68, 68, 65, 40, 60, 68, 75, 70, 90], {
                type: 'line',
                width: '100%',
                height: '100%',
                tooltipClassname: 'chart-sparkline',
                lineColor: '#a5a5a5',
                fillColor: 'transparent',
                highlightLineColor: "#a5a5a5",
                highlightSpotColor: false,
                targetColor: "#a5a5a5",
                performanceColor: "#a5a5a5",
                boxFillColor: "#a5a5a5",
                medianColor: "#a5a5a5",
                minSpotColor: false,
                maxSpotColor: false,
                spotColor: false
            });
            $("#simple-line-chart-sparkline-2").sparkline([85, 83, 90, 70, 85, 60, 65, 63, 68, 68, 65, 40, 60, 68, 75, 70, 90], {
                type: 'line',
                width: '100%',
                height: '100%',
                tooltipClassname: 'chart-sparkline',
                lineColor: '#ffbc58',
                fillColor: 'transparent',
                highlightLineColor: "#ffbc58",
                highlightSpotColor: false,
                targetColor: "#ffbc58",
                performanceColor: "#ffbc58",
                boxFillColor: "#ffbc58",
                medianColor: "#ffbc58",
                minSpotColor: false,
                maxSpotColor: false,
                spotColor: false
            });
            $("#simple-line-chart-sparkline-3").sparkline([20, 5, 80, 10, 100, 15], {
                type: 'line',
                width: '100%',
                height: '100%',
                tooltipClassname: 'chart-sparkline',
                lineColor: '#ff4c3b',
                fillColor: 'transparent',
                highlightLineColor: "#ff4c3b",
                highlightSpotColor: false,
                targetColor: "#ff4c3b",
                performanceColor: "#ff4c3b",
                boxFillColor: "#ff4c3b",
                medianColor: "#ff4c3b",
                minSpotColor: false,
                maxSpotColor: false,
                spotColor: false
            });
        });
    }
};
(function ($) {
    "use strict";
    sparkline_chart.init()
})(jQuery);