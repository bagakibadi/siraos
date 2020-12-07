var lyogyakarta = [];
var lyogyakarta_on = [];
var lyogyakarta_of = [];
var nyogyakarta_on = [];
var nyogyakarta_of = [];
var cyogyakarta = 0;

var lsurabaya = [];
var lsurabaya_on = [];
var lsurabaya_of = [];
var nsurabaya_on = [];
var nsurabaya_of = [];
var csurabaya = 0;

var lmedan = [];
var lmedan_on = [];
var lmedan_of = [];
var nmedan_on = [];
var nmedan_of = [];
var cmedan = 0;

var lbandung = [];
var lbandung_on = [];
var lbandung_of = [];
var nbandung_on = [];
var nbandung_of = [];
var cbandung = 0;

var lmanado = [];
var lmanado_on = [];
var lmanado_of = [];
var nmanado_on = [];
var nmanado_of = [];
var cmanado = 0;

var llombok = [];
var llombok_on = [];
var llombok_of = [];
var nlombok_on = [];
var nlombok_of = [];
var clombok = 0;

var lsemarang = [];
var lsemarang_on = [];
var lsemarang_of = [];
var nsemarang_on = [];
var nsemarang_of = [];
var csemarang = 0;

var lbatam = [];
var lbatam_on = [];
var lbatam_of = [];
var nbatam_on = [];
var nbatam_of = [];
var cbatam = 0;

var ljakarta = [];
var ljakarta_on = [];
var ljakarta_of = [];
var njakarta_on = [];
var njakarta_of = [];
var cjakarta = 0;

$(document).ready(function() {

    $.ajax({
        url: "https://api-sch.primakom.co.id/chse/webonline.php?lokasi=1",
        method: "GET",
        success: function(result) {
            lyogyakarta = result;
        },
        async: false
    });

    lyogyakarta.response.belanja.forEach(function(element) {
        if (element.status == "Online") {
            lyogyakarta_on.push(element);
        } else {
            lyogyakarta_of.push(element);
        }
    });

    $.ajax({
        url: "https://api-sch.primakom.co.id/chse/webonline.php?lokasi=2",
        method: "GET",
        success: function(result) {
            lsurabaya = result;
        },
        async: false
    });

    lsurabaya.response.belanja.forEach(function(element) {
        if (element.status == "Online") {
            lsurabaya_on.push(element);
        } else {
            lsurabaya_of.push(element);
        }
    });

    $.ajax({
        url: "https://api-sch.primakom.co.id/chse/webonline.php?lokasi=3",
        method: "GET",
        success: function(result) {
            lmedan = result;
        },
        async: false
    });

    lmedan.response.belanja.forEach(function(element) {
        if (element.status == "Online") {
            lmedan_on.push(element);
        } else {
            lmedan_of.push(element);
        }
    });

    $.ajax({
        url: "https://api-sch.primakom.co.id/chse/webonline.php?lokasi=4",
        method: "GET",
        success: function(result) {
            lbandung = result;
        },
        async: false
    });

    lbandung.response.belanja.forEach(function(element) {
        if (element.status == "Online") {
            lbandung_on.push(element);
        } else {
            lbandung_of.push(element);
        }
    });

    $.ajax({
        url: "https://api-sch.primakom.co.id/chse/webonline.php?lokasi=5",
        method: "GET",
        success: function(result) {
            lmanado = result;
        },
        async: false
    });

    lmanado.response.belanja.forEach(function(element) {
        if (element.status == "Online") {
            lmanado_on.push(element);
        } else {
            lmanado_of.push(element);
        }
    });

    $.ajax({
        url: "https://api-sch.primakom.co.id/chse/webonline.php?lokasi=6",
        method: "GET",
        success: function(result) {
            llombok = result;
        },
        async: false
    });

    llombok.response.belanja.forEach(function(element) {
        if (element.status == "Online") {
            llombok_on.push(element);
        } else {
            llombok_of.push(element);
        }
    });

    $.ajax({
        url: "https://api-sch.primakom.co.id/chse/webonline.php?lokasi=7",
        method: "GET",
        success: function(result) {
            lsemarang = result;
        },
        async: false
    });

    lsemarang.response.belanja.forEach(function(element) {
        if (element.status == "Online") {
            lsemarang_on.push(element);
        } else {
            lsemarang_of.push(element);
        }
    });

    $.ajax({
        url: "https://api-sch.primakom.co.id/chse/webonline.php?lokasi=8",
        method: "GET",
        success: function(result) {
            lbatam = result;
        },
        async: false
    });

    lbatam.response.belanja.forEach(function(element) {
        if (element.status == "Online") {
            lbatam_on.push(element);
        } else {
            lbatam_of.push(element);
        }
    });

    $.ajax({
        url: "https://api-sch.primakom.co.id/chse/webonline.php?lokasi=9",
        method: "GET",
        success: function(result) {
            ljakarta = result;
        },
        async: false
    });

    ljakarta.response.belanja.forEach(function(element) {
        if (element.status == "Online") {
            ljakarta_on.push(element);
        } else {
            ljakarta_of.push(element);
        }
    });

    var options = {
        chart: {
            height: 340,
            type: 'bar',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                endingShape: 'rounded',
                columnWidth: '25%',
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
        colors: ["#1ccab8", '#2a76f4', '#3c1199'],
        series: [{
            name: 'Semua',
            data: [
                lyogyakarta.response.belanja.length, 
                lsurabaya.response.belanja.length,
                lmedan.response.belanja.length, 
                lbandung.response.belanja.length, 
                lmanado.response.belanja.length,
                llombok.response.belanja.length,
                lsemarang.response.belanja.length, 
                lbatam.response.belanja.length,
                ljakarta.response.belanja.length
            ]
        },{
            name: 'Offline',
            data: [
                lyogyakarta_of.length,
                lsurabaya_of.length,
                lmedan_of.length,
                lbandung_of.length,
                lmanado_of.length,
                llombok_of.length,
                lsemarang_of.length,
                lbatam_of.length,
                ljakarta_of.length 
            ]
        },{
            name: 'Online',
            data: [
                lyogyakarta_on.length,
                lsurabaya_on.length,
                lmedan_on.length,
                lbandung_on.length,
                lmanado_on.length,
                llombok_on.length,
                lsemarang_on.length,
                lbatam_on.length,
                ljakarta_on.length 
            ]
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
                text: 'Visitors',
            },
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
                opacity: 0.2,           
            },
            strokeDashArray: 4,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "" + val + " orang"
                }
            }
        }
    }

    var chart = new ApexCharts(
        document.querySelector("#ana_dash_1"),
        options
    );

    chart.render();
});

