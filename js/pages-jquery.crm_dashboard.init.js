var plot = $.plot("#CrmDashChart", [{
        data: flotDataType1,
        color: "#d9e6fd",
        lines: {
            fillColor: {
                colors: [{
                    opacity: 1
                }, {
                    opacity: .6
                }]
            }
        }
    }, {
        data: flotDataType2,
        color: "#2a76f4",
        lines: {
            fillColor: {
                colors: [{
                    opacity: 1
                }, {
                    opacity: .6
                }]
            }
        }
    }], {
        series: {
            lines: {
                show: !0,
                lineWidth: 2,
                fill: !0,
                fillColor: {
                    colors: [{
                        opacity: 0
                    }, {
                        opacity: .3
                    }]
                }
            },
            gradient: {
                radial: !0,
                hoverable: !0,
                colors: [{
                    opacity: .5
                }, {
                    opacity: 1
                }]
            },
            shadowSize: 4
        },
        grid: {
            hoverable: !1,
            clickable: !1,
            borderWidth: 0,
            labelMargin: 0,
            color: "rgba(118, 126, 154, 0.4)"
        },
        yaxis: {
            show: !0,
            min: 0,
            max: 15,
            ticks: [
                [0, ""],
                [10, "100"],
                [20, "200"],
                [30, "300"],
                [40, "400"],
                [50, "500"],
                [60, "600"],
                [70, "700"]
            ]
        },
        xaxis: {
            show: !0,
            ticks: [
                [0, ""],
                [10, "Jan"],
                [22, "Feb"],
                [34, "Mar"],
                [46, "Apr"],
                [58, "May"],
                [70, "Jun"],
                [82, "Jul"],
                [94, "Aug"],
                [106, "Sep"],
                [118, "Oct"],
                [130, "Nov"],
                [142, "Dec"]
            ]
        }
    }),
    dash_spark_1 = {
        chart: {
            type: "area",
            height: 25,
            sparkline: {
                enabled: !0
            }
        },
        stroke: {
            curve: "straight",
            width: 1
        },
        fill: {
            opacity: 1,
            gradient: {
                shade: "#fd3c97",
                type: "vertical",
                shadeIntensity: .8,
                inverseColors: !0,
                opacityFrom: .5,
                opacityTo: .1,
                stops: [0, 80, 90],
                colorStops: []
            }
        },
        series: [{
            data: [0, 0, 0, 2, 0, 0, 0, 0, 0, 10, 0, 0, 0, 5, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 10, 0, 0, 0, 5, 0, 0, 0, 0, 5, 0, 0, 0, 0]
        }],
        yaxis: {
            min: 0
        },
        colors: ["#2e79f4"]
    };
new ApexCharts(document.querySelector("#dash_spark_1"), dash_spark_1).render();
var dash_spark_2 = {
    chart: {
        type: "area",
        height: 25,
        sparkline: {
            enabled: !0
        }
    },
    stroke: {
        curve: "straight",
        width: 1
    },
    fill: {
        opacity: 1,
        gradient: {
            shade: "#fd3c97",
            type: "vertical",
            shadeIntensity: .8,
            inverseColors: !0,
            opacityFrom: .5,
            opacityTo: .1,
            stops: [0, 80, 90],
            colorStops: []
        }
    },
    series: [{
        data: [0, 0, 0, 0, 0, 3, 0, 0, 0, 5, 0, 0, 0, 0, 10, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 5, 0, 0, 0, 0, 10, 0, 0, 0, 0, 2, 0, 0]
    }],
    yaxis: {
        min: 0
    },
    colors: ["#2e79f4"]
};
new ApexCharts(document.querySelector("#dash_spark_2"), dash_spark_2).render();
var dash_spark_3 = {
    chart: {
        type: "area",
        height: 25,
        sparkline: {
            enabled: !0
        }
    },
    stroke: {
        curve: "straight",
        width: 1
    },
    fill: {
        opacity: 1,
        gradient: {
            shade: "#fd3c97",
            type: "vertical",
            shadeIntensity: .8,
            inverseColors: !0,
            opacityFrom: .5,
            opacityTo: .1,
            stops: [0, 80, 90],
            colorStops: []
        }
    },
    series: [{
        data: [0, 0, 0, 5, 0, 0, 0, 0, 0, 10, 0, 0, 0, 5, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 10, 0, 0, 0, 5, 0, 0, 0, 0, 3, 0, 0, 0, 0]
    }],
    yaxis: {
        min: 0
    },
    colors: ["#2e79f4"]
};
new ApexCharts(document.querySelector("#dash_spark_3"), dash_spark_3).render();
var options = {
    chart: {
        height: 205,
        type: "donut"
    },
    plotOptions: {
        pie: {
            donut: {
                size: "85%"
            }
        }
    },
    dataLabels: {
        enabled: !1
    },
    stroke: {
        show: !0,
        width: 2,
        colors: ["transparent"]
    },
    series: [10, 65, 25],
    legend: {
        show: !1,
        position: "bottom",
        horizontalAlign: "center",
        verticalAlign: "middle",
        floating: !1,
        fontSize: "14px",
        offsetX: 0,
        offsetY: 5
    },
    labels: ["Sent", "Opened", "Not Opened"],
    colors: ["#fdb5c8", "#2a76f4", "#67c8ff"],
    responsive: [{
        breakpoint: 600,
        options: {
            plotOptions: {
                donut: {
                    customScale: .2
                }
            },
            chart: {
                height: 200
            },
            legend: {
                show: !1
            }
        }
    }],
    tooltip: {
        y: {
            formatter: function(e) {
                return e + " %"
            }
        }
    }
};
(chart = new ApexCharts(document.querySelector("#email_report"), options)).render();
var chart;
options = {
    series: [{
        name: "Domestic",
        data: [44, 55, 41, 67, 22, 43, 35]
    }, {
        name: "International",
        data: [13, 23, 20, 8, 13, 27, 45]
    }],
    chart: {
        type: "bar",
        height: 265,
        stacked: !0,
        toolbar: {
            show: !1
        },
        zoom: {
            enabled: !0
        }
    },
    stroke: {
        show: !0,
        width: 2,
        colors: ["transparent"]
    },
    colors: ["#2a76f4", "#fdb5c8"],
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0
            }
        }
    }],
    plotOptions: {
        bar: {
            horizontal: !1,
            columnWidth: "30%"
        }
    },
    xaxis: {
        type: "categories",
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    },
    grid: {
        row: {
            colors: ["transparent", "transparent"],
            opacity: .2
        },
        strokeDashArray: 2.5
    },
    legend: {
        offsetY: 6
    },
    fill: {
        opacity: 1
    }
};
(chart = new ApexCharts(document.querySelector("#widget1"), options)).render();