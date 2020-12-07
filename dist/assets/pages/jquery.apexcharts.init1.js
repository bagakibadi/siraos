let lokasi1 = [];
// let lokasi2 = null;
// let lokasi3 = null;
// let lokasi4 = null;
// let lokasi5 = null;
// let lokasi6 = null;
// let lokasi7 = null;
// let lokasi8 = null;
// let lokasi9 = null;

$(document).ready(function() {
    // const result7 = $.parseJSON($.ajax({
    //     url:  'https://api-sch.primakom.co.id/chse/webonline.php?lokasi=7',
    //     method: 'GET',
    //     dataType: "json", 
    //     async: false
    // }).responseText);

    // lokasi1.push(result7.response.belanja.length)

    $.ajax({
        url: "https://api-sch.primakom.co.id/chse/webonline.php?lokasi=1",
        method: "GET",
        success: function(result) {
            lokasi1.push(result.response.belanja.length)
        },
        async: false,
    })
    $.ajax({
        url: "https://api-sch.primakom.co.id/chse/webonline.php?lokasi=2",
        method: "GET",
        success: function(result) {
            lokasi1.push(result.response.belanja.length)
        },
        async: false,
    })
    $.ajax({
        url: "https://api-sch.primakom.co.id/chse/webonline.php?lokasi=3",
        method: "GET",
        success: function(result) {
            lokasi1.push(result.response.belanja.length)
        },
        async: false,
    })
    $.ajax({
        url: "https://api-sch.primakom.co.id/chse/webonline.php?lokasi=4",
        method: "GET",
        success: function(result) {
            lokasi1.push(result.response.belanja.length)
        },
        async: false,
    })
    $.ajax({
        url: "https://api-sch.primakom.co.id/chse/webonline.php?lokasi=5",
        method: "GET",
        success: function(result) {
            lokasi1.push(result.response.belanja.length)
        },
        async: false,
    })
    $.ajax({
        url: "https://api-sch.primakom.co.id/chse/webonline.php?lokasi=6",
        method: "GET",
        success: function(result) {
            lokasi1.push(result.response.belanja.length)
        },
        async: false
    })
    $.ajax({
        url: "https://api-sch.primakom.co.id/chse/webonline.php?lokasi=7",
        method: "GET",
        success: function(result) {
            lokasi1.push(result.response.belanja.length)
        },
        async: false,
    })
    $.ajax({
        url: "https://api-sch.primakom.co.id/chse/webonline.php?lokasi=8",
        method: "GET",
        success: function(result) {
            lokasi1.push(result.response.belanja.length)
        },
        async: false,
    })
    $.ajax({
        url: "https://api-sch.primakom.co.id/chse/webonline.php?lokasi=9",
        method: "GET",
        success: function(result) {
            lokasi1.push(result.response.belanja.length)
        },
        async: false,
    })
})
console.log(lokasi1)
console.log(lokasi1[0])
lokasi1 = lokasi1.splice(0)
console.log(lokasi1)
console.log(lokasi1[1])

var options = {
    chart: {
        height: 396,
        type: 'bar',
        toolbar: {
            show: false
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            endingShape: 'rounded',
            columnWidth: '55%',
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    colors: ["#5766da", "red"],
    series: [{
        name: 'Online',
        data: [ lokasi1[0], lokasi1[1], lokasi1[2], lokasi1[3], lokasi1[4], lokasi1[5], lokasi1[6], lokasi1[7], lokasi1[8]]
    }, {
        name: 'Offline',
        data: [ lokasi1[0], lokasi1[1], lokasi1[2], lokasi1[3], lokasi1[4], lokasi1[5], lokasi1[6], lokasi1[7], lokasi1[8]]
    }],
    xaxis: {
        categories: ['Yogyakarta', 'Surabaya', 'Medan', 'Bandung', 'Manado', 'Lombok', 'Semarang', 'Batam', 'Jakarta'],
        axisBorder: {
            show: true,
            color: '#bec7e0',
          },  
          axisTicks: {
            show: true,
            color: '#bec7e0',
        },    
    },
    legend: {
        offsetY: 6,
    },
    yaxis: {
        title: {
            text: '$ (thousands)'
        }
    },
    fill: {
        opacity: 1

    },
    // legend: {
    //     floating: true
    // },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f1f3fa'
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " thousands"
            }
        }
    }
}

var chart = new ApexCharts(
    document.querySelector("#apex_column1"),
    options
);

chart.render();
